module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderRadius: {
        super: "2.5rem",
        "-t-super": "2.5rem",
      },
      backgroundImage: {
        yeezy700:
          "url('https://images.unsplash.com/photo-1578854955076-970394ef2512?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')",
        yeezy700shoes: "url('https://i.ibb.co/BggZX1k/i-Phone-SE-1.png')",
        nike: "url('https://i.ibb.co/3BStRtC/Frame-3.png')",
        adidas: "url('https://i.ibb.co/TqmqyrT/Frame-2.png')",
        airJordan: "url('https://i.ibb.co/DwHytQj/Frame-4black.png')",
        champion: "url('https://i.ibb.co/4R2cfLd/Frame-6black.png')",
        tomy: "url('https://i.ibb.co/YLpr8mN/Frame-5black.png')",
        louis: "url('https://i.ibb.co/4MDYjXH/Frame-7.png')",
        men: "url('https://images.unsplash.com/photo-1576775068668-c147f14c36f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
        women:
          "url('https://images.unsplash.com/photo-1566677914817-56426959ae9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
