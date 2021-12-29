const config = {
    extensions: [".svelte.md", ".md", ".svx"],

    smartypants: {
        dashes: "oldschool",
    },

    layout: {
        blog: "./src/routes/$lib/BlogPost.svelte"
    },

    remarkPlugins: [],
    rehypePlugins: [],
};

export default config;
