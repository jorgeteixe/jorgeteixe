<script lang="ts">
  import { onMount } from "svelte";
  import { GitCommitHorizontal, GitBranch, Github } from "lucide-svelte";

  interface GitHubCommit {
    sha: string;
    commit: {
      message: string;
      author: {
        name: string;
        date: string;
      };
    };
    html_url: string;
    repository?: {
      name: string;
      full_name: string;
    };
  }

  interface GitHubEvent {
    id: string;
    type: string;
    repo: {
      name: string;
      url: string;
    };
    payload: any;
    created_at: string;
  }

  let loading = $state(true);
  let error = $state(false);
  let lastCommit: GitHubCommit | null = $state(null);
  let recentActivity: GitHubEvent[] = $state([]);
  let pulseActive = $state(true);

  onMount(async () => {
    try {
      // Fetch latest commits across all repos
      const eventsResponse = await fetch(
        "https://api.github.com/users/jorgeteixe/events/public"
      );
      if (!eventsResponse.ok) throw new Error("Failed to fetch events");

      const events: GitHubEvent[] = await eventsResponse.json();

      // Filter push events and get the latest commit
      const pushEvents = events.filter((event) => event.type === "PushEvent");
      if (pushEvents.length > 0) {
        const latestPush = pushEvents[0];
        const commits = latestPush.payload.commits;
        if (commits && commits.length > 0) {
          const latestCommitData = commits[commits.length - 1];
          lastCommit = {
            sha: latestCommitData.sha,
            commit: {
              message: latestCommitData.message,
              author: {
                name: latestCommitData.author.name,
                date: latestPush.created_at,
              },
            },
            html_url: `https://github.com/${latestPush.repo.name}/commit/${latestCommitData.sha}`,
            repository: {
              name: latestPush.repo.name.split("/")[1],
              full_name: latestPush.repo.name,
            },
          };
        }
      }

      // Get recent activity (last 3 events)
      recentActivity = events.slice(0, 3);

      loading = false;

      // Pulse animation interval
      setInterval(() => {
        pulseActive = false;
        setTimeout(() => (pulseActive = true), 100);
      }, 3000);
    } catch (err) {
      console.error("Failed to fetch GitHub data:", err);
      error = true;
      loading = false;
    }
  });

  function getEventDescription(event: GitHubEvent): string {
    switch (event.type) {
      case "PushEvent":
        const commitCount = event.payload.commits?.length || 0;
        return `Pushed ${commitCount} commit${commitCount !== 1 ? "s" : ""} to ${event.repo.name.split("/")[1]}`;
      case "CreateEvent":
        return `Created ${event.payload.ref_type} in ${event.repo.name.split("/")[1]}`;
      case "IssuesEvent":
        return `${event.payload.action} issue in ${event.repo.name.split("/")[1]}`;
      case "PullRequestEvent":
        return `${event.payload.action} pull request in ${event.repo.name.split("/")[1]}`;
      default:
        return `Activity in ${event.repo.name.split("/")[1]}`;
    }
  }

  function formatTimeAgo(dateString: string): string {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = (now.getTime() - date.getTime()) / 1000;

    if (diffInSeconds < 60) return "just now";
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
    if (diffInSeconds < 86400)
      return `${Math.floor(diffInSeconds / 3600)}h ago`;
    return `${Math.floor(diffInSeconds / 86400)}d ago`;
  }
</script>

<section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-1 pb-8">
  <div class="flex items-center gap-2 mb-4">
    <div
      class={`w-2.5 h-2.5 rounded-full animate-pulse ${
        loading ? "bg-yellow-400" : "bg-green-500"
      }`}
    ></div>
    <span class="text-sm font-medium text-gray-600">Live from </span>
    <a
      href="https://github.com/jorgeteixe"
      target="_blank"
      rel="noopener noreferrer"
      class="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded px-1 py-0.5 -mx-1 -my-0.5 transition-all duration-200"
      aria-label="GitHub Profile"
    >
      <span>GitHub</span>
      <Github size={16} />
    </a>
  </div>

  <div class="bg-gray-50 rounded-lg p-4">
    {#if loading}
      <!-- Skeleton Loading - Horizontal -->
      <div class="grid md:grid-cols-2 gap-4">
        <div class="space-y-2">
          <div class="h-3 bg-gray-200 rounded animate-pulse w-24"></div>
          <div class="h-4 bg-gray-200 rounded animate-pulse w-full"></div>
          <div class="h-3 bg-gray-200 rounded animate-pulse w-32"></div>
        </div>
        <div class="space-y-2">
          <div class="h-3 bg-gray-200 rounded animate-pulse w-20"></div>
          {#each [1, 2] as _}
            <div class="flex items-center gap-2">
              <div class="w-3 h-3 bg-gray-200 rounded animate-pulse"></div>
              <div class="h-3 bg-gray-200 rounded animate-pulse flex-1"></div>
              <div class="h-3 bg-gray-200 rounded animate-pulse w-12"></div>
            </div>
          {/each}
        </div>
      </div>
    {:else if error}
      <div class="text-center text-gray-500 text-sm py-2">
        <p>Unable to load GitHub activity</p>
      </div>
    {:else}
      <div class="grid md:grid-cols-2 gap-6">
        <!-- Latest Commit -->
        {#if lastCommit}
          <div class="h-20 flex flex-col">
            <div class="flex items-center gap-2 mb-2">
              <GitCommitHorizontal size={14} class="text-gray-500" />
              <h3
                class="text-xs font-medium text-gray-500 uppercase tracking-wide"
              >
                Latest Commit
              </h3>
            </div>
            <a
              href={lastCommit.html_url}
              target="_blank"
              rel="noopener noreferrer"
              class="hover:bg-gray-100 rounded p-2 -m-2 transition-colors flex-1 flex flex-col justify-center"
            >
              <p class="text-sm text-gray-900 font-medium mb-1 truncate">
                {lastCommit.commit.message}
              </p>
              <div class="flex items-center gap-2 text-xs text-gray-500">
                <span>{lastCommit.repository?.name}</span>
                <span>•</span>
                <span>{formatTimeAgo(lastCommit.commit.author.date)}</span>
              </div>
            </a>
          </div>
        {/if}

        <!-- Recent Activity -->
        <div class="h-20 flex flex-col">
          <div class="flex items-center gap-2 mb-2">
            <GitBranch size={14} class="text-gray-500" />
            <h3
              class="text-xs font-medium text-gray-500 uppercase tracking-wide"
            >
              Recent Activity
            </h3>
          </div>
          <div class="space-y-1 flex-1 flex flex-col justify-center">
            {#each recentActivity.slice(0, 2) as event}
              <div class="flex items-center gap-2 text-xs py-0.5">
                <div
                  class="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"
                ></div>
                <span class="text-gray-700 flex-1 truncate">
                  {getEventDescription(event)}
                </span>
                <span class="text-gray-500">
                  {formatTimeAgo(event.created_at)}
                </span>
              </div>
            {/each}
          </div>
        </div>
      </div>
    {/if}
  </div>
</section>
