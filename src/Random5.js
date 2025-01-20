
import { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme = {
    name: 'random-5',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-color-base": "var(--color-secondary-50)",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #5d7a9e 
		"--color-primary-50": "231 235 240", // #e7ebf0
		"--color-primary-100": "223 228 236", // #dfe4ec
		"--color-primary-200": "215 222 231", // #d7dee7
		"--color-primary-300": "190 202 216", // #becad8
		"--color-primary-400": "142 162 187", // #8ea2bb
		"--color-primary-500": "93 122 158", // #5d7a9e
		"--color-primary-600": "84 110 142", // #546e8e
		"--color-primary-700": "70 92 119", // #465c77
		"--color-primary-800": "56 73 95", // #38495f
		"--color-primary-900": "46 60 77", // #2e3c4d
		// secondary | #26eef7 
		"--color-secondary-50": "222 252 254", // #defcfe
		"--color-secondary-100": "212 252 253", // #d4fcfd
		"--color-secondary-200": "201 251 253", // #c9fbfd
		"--color-secondary-300": "168 248 252", // #a8f8fc
		"--color-secondary-400": "103 243 249", // #67f3f9
		"--color-secondary-500": "38 238 247", // #26eef7
		"--color-secondary-600": "34 214 222", // #22d6de
		"--color-secondary-700": "29 179 185", // #1db3b9
		"--color-secondary-800": "23 143 148", // #178f94
		"--color-secondary-900": "19 117 121", // #137579
		// tertiary | #85cc75 
		"--color-tertiary-50": "237 247 234", // #edf7ea
		"--color-tertiary-100": "231 245 227", // #e7f5e3
		"--color-tertiary-200": "225 242 221", // #e1f2dd
		"--color-tertiary-300": "206 235 200", // #ceebc8
		"--color-tertiary-400": "170 219 158", // #aadb9e
		"--color-tertiary-500": "133 204 117", // #85cc75
		"--color-tertiary-600": "120 184 105", // #78b869
		"--color-tertiary-700": "100 153 88", // #649958
		"--color-tertiary-800": "80 122 70", // #507a46
		"--color-tertiary-900": "65 100 57", // #416439
		// success | #f9f26d 
		"--color-success-50": "254 253 233", // #fefde9
		"--color-success-100": "254 252 226", // #fefce2
		"--color-success-200": "254 252 219", // #fefcdb
		"--color-success-300": "253 250 197", // #fdfac5
		"--color-success-400": "251 246 153", // #fbf699
		"--color-success-500": "249 242 109", // #f9f26d
		"--color-success-600": "224 218 98", // #e0da62
		"--color-success-700": "187 182 82", // #bbb652
		"--color-success-800": "149 145 65", // #959141
		"--color-success-900": "122 119 53", // #7a7735
		// warning | #03c72e 
		"--color-warning-50": "217 247 224", // #d9f7e0
		"--color-warning-100": "205 244 213", // #cdf4d5
		"--color-warning-200": "192 241 203", // #c0f1cb
		"--color-warning-300": "154 233 171", // #9ae9ab
		"--color-warning-400": "79 216 109", // #4fd86d
		"--color-warning-500": "3 199 46", // #03c72e
		"--color-warning-600": "3 179 41", // #03b329
		"--color-warning-700": "2 149 35", // #029523
		"--color-warning-800": "2 119 28", // #02771c
		"--color-warning-900": "1 98 23", // #016217
		// error | #f51479 
		"--color-error-50": "254 220 235", // #fedceb
		"--color-error-100": "253 208 228", // #fdd0e4
		"--color-error-200": "253 196 222", // #fdc4de
		"--color-error-300": "251 161 201", // #fba1c9
		"--color-error-400": "248 91 161", // #f85ba1
		"--color-error-500": "245 20 121", // #f51479
		"--color-error-600": "221 18 109", // #dd126d
		"--color-error-700": "184 15 91", // #b80f5b
		"--color-error-800": "147 12 73", // #930c49
		"--color-error-900": "120 10 59", // #780a3b
		// surface | #4d3441 
		"--color-surface-50": "228 225 227", // #e4e1e3
		"--color-surface-100": "219 214 217", // #dbd6d9
		"--color-surface-200": "211 204 208", // #d3ccd0
		"--color-surface-300": "184 174 179", // #b8aeb3
		"--color-surface-400": "130 113 122", // #82717a
		"--color-surface-500": "77 52 65", // #4d3441
		"--color-surface-600": "69 47 59", // #452f3b
		"--color-surface-700": "58 39 49", // #3a2731
		"--color-surface-800": "46 31 39", // #2e1f27
		"--color-surface-900": "38 25 32", // #261920
		
	}
}