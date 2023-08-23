/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				ricoh: "#bf292f",
				ricohHover: "#c53e44",
				epson: "#039",
				epsonHover: "#1a47a3",
			},
			screens: {
				'sb': '525px',
        'mb': '700px',
				'lb': '1024px',
        'sbMax': {'max': '525px'},
        'mbMax': {'max': '700px'},
        'lbMax': {'max': '1024px'},
      },
		},
	},
	plugins: [],
};
