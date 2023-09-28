/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			width:
			{fullDVW:"100dvw",
			w407px:"407px"},
			

			height:
			{fullDVH:"100dvh",},
			spacing:{18:'4.5rem'},


			clipPath:
			{logoClip:"clip-path: rect(110px, 160px, 170px, 60px)"},

			screens:{
				fs:{
					raw:'(display-mode:fullscreen)'
				},
				maxLg:{"max":"1032px"},
				maxMd:{'max':"600px"},
				maxSm:{'max':"420px"}
			},
			backgroundImage:{
				openPhoto: 'url(/assets/registerPagePhoto.jpg)',
				check: "url(assets/client/src/assets/iconmonstr-check-mark-1.svg)",
				ratingGradient:"linear-gradient(90deg, var(--star-background) var(--percent), var(--star-color) var(--percent); "
				
			},
			borderRadius:{
				thirtypx:'30px'
			},
			transitionProperty: {
				'fontSize': 'fontSize',
			},
			borderWidth:{
				px:'1px'
			},
			fontSize:{
				fs30px:'30px',
				fs8px:'8px'
			},textColor:{
				trans: "webkit-text-fill-color:transparent"
	
			},

keyframes:{

	heartBounce:{
		"0%, 100%":{ 
		transform: "translateY(-25%)"},
		// transitionTimingFunction:" cubic-bezier(0.8, 0, 1, 1)}"},
		'50%':{ transform: "translateY(0)" }
		
		// transitionTimingFunction:"cubic-bezier(0, 0, 0.2, 1)"
	},
	
	animation:{
		heartBounce:"heartBounce 1s 3 "
	}
}



		},



		colors:{
			transparent:"transparent",
			errorRed:'hsl(var(--color-red)/<alpha-value>)',
			black:'hsl(var(--color-dark)/<alpha-value>)',
			purple: 'hsl(var(--color-purple)/<alpha-value>)',
			aeroBlue: 'hsl(var(--color-aeroBlue)/<alpha-value>)',
			alabaster: 'hsl(var(--color-alabaster)/<alpha-value>)',
			khaki: 'hsl(var(--color-khaki)/<alpha-value>)',
			dimGray:"hsl(var(--color-dimgray)/<alpha-value>)",
			dark:'hsl(var(--color-dark)/<alpha-value>)',
			white:'#ffffff',
			modalBackFill:"rgb(var(--color-modalBackFill)/<alpha-value>)",
			logoPurple :"hsl(var(--color-logoPurple)/<alpha-value>)",
			checkmarkGreen: "hsl(var(--color-checkmarkGreen)/<alpha-value>)",
			gold:"hsl(var(--color-gold)/<alpha-value>)"


			// FIXME: turn below white into HSL

	// 		purple: {
	// 			veryLight:'#BD95EE',
	// 			light:'#9D61E5', 
	// 			dark:'#2f0E58'},

	// 		aeroBlue:{
	// 			light:"#CCE8F5",
	// 			default:'#5DB7DE',
	// 			medium:'#2898cc',
		},
		corePlugins: {
			aspectRatio: false
		},
	
	},
	plugins: [  
	require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),

],
};
