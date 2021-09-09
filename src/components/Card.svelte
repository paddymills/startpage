
<script>
    export let title;
    export let links = [];
</script>

<card>
    <h4>{title}</h4>

    {#each links as item}
        <a href={item.url}>{item.title}</a>
    {/each}
</card>

<style>
    card {
        border: 1px solid white;
        margin: 1em;
        padding: 2em;
        border-radius: 0.5em;
        
        display: flex;
        flex-direction: column;
		justify-content: flex-start;
		align-items: center;
    }

    card:hover {
        transform: scale(1.1);
        /* background-color: #1a1b26; */
        background-color: var(--hover_bg);
    }

    h4 {
        color: var(--titles);
    }
</style>