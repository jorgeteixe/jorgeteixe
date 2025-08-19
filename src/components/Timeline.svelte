<script lang="ts">
  import { ExternalLink, ArrowUpDown } from "lucide-svelte";

  import type { TimelineData } from "../data/timeline.ts";

  const { timelineData } = $props<{ timelineData: TimelineData }>();

  let isReversed = $state(false);

  let timelineItems = $derived(
    isReversed ? [...timelineData.timeline].reverse() : timelineData.timeline
  );

  function toggleOrder() {
    isReversed = !isReversed;
  }
</script>

<!-- Controls -->
<div class="flex items-center justify-between mb-6">
  <div></div>
  <button
    onclick={toggleOrder}
    class="inline-flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
  >
    <ArrowUpDown size={16} />
    {isReversed ? "Oldest First" : "Newest First"}
  </button>
</div>

<!-- Timeline -->
<div class="space-y-8">
  {#each timelineItems as item, index}
    <article class="border-b border-gray-200 pb-8 last:border-b-0 last:pb-0">
      <div class="flex items-start gap-6">
        <div class="text-sm text-gray-500 font-mono w-16 flex-shrink-0 mt-1">
          {item.year}
        </div>

        <div class="flex-1 min-w-0">
          <div class="flex items-start justify-between mb-2">
            <h3 class="text-xl font-semibold text-gray-900">{item.title}</h3>
            {#if item.location}
              <span class="text-sm text-gray-500 ml-4 flex-shrink-0 italic">
                {item.location}
              </span>
            {/if}
          </div>

          <p class="text-gray-600 leading-relaxed mb-3">
            {item.description}
          </p>

          {#if item.tags && item.tags.length > 0}
            <div class="flex flex-wrap gap-1 mb-3">
              {#each item.tags as tag}
                <span
                  class="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded"
                >
                  {tag}
                </span>
              {/each}
            </div>
          {/if}

          {#if item.image}
            <div class="mb-3 max-w-lg">
              <img
                src={typeof item.image === "string"
                  ? item.image
                  : item.image.src}
                alt={item.title}
                class="w-full h-48 object-cover rounded border border-gray-200"
              />
              {#if item.imageCaption}
                <p class="text-xs text-gray-500 mt-2 italic text-center">
                  {item.imageCaption}
                </p>
              {/if}
            </div>
          {/if}

          {#if item.links && item.links.length > 0}
            <div class="flex flex-wrap gap-4">
              {#each item.links as link}
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 hover:underline"
                >
                  {link.text}
                  <ExternalLink size={12} />
                </a>
              {/each}
            </div>
          {/if}
        </div>
      </div>
    </article>
  {/each}
</div>
