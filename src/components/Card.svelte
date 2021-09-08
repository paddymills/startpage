
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
        border-radius: 0.2em;
        
        display: flex;
        flex-direction: column;
		justify-content: flex-start;
		align-items: center;
    }

    h4 {
        color: white;
        text-decoration: underline;
    }
</style>