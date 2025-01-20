
import { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme = {
    name: 'random-2',
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
		"--on-primary": "255 255 255",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "255 255 255",
		"--on-success": "255 255 255",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "0 0 0",
		// =~= Theme Colors  =~=
		// primary | #3a0c7e 
		"--color-primary-50": "225 219 236", // #e1dbec
		"--color-primary-100": "216 206 229", // #d8cee5
		"--color-primary-200": "206 194 223", // #cec2df
		"--color-primary-300": "176 158 203", // #b09ecb
		"--color-primary-400": "117 85 165", // #7555a5
		"--color-primary-500": "58 12 126", // #3a0c7e
		"--color-primary-600": "52 11 113", // #340b71
		"--color-primary-700": "44 9 95", // #2c095f
		"--color-primary-800": "35 7 76", // #23074c
		"--color-primary-900": "28 6 62", // #1c063e
		// secondary | #4bba90 
		"--color-secondary-50": "228 245 238", // #e4f5ee
		"--color-secondary-100": "219 241 233", // #dbf1e9
		"--color-secondary-200": "210 238 227", // #d2eee3
		"--color-secondary-300": "183 227 211", // #b7e3d3
		"--color-secondary-400": "129 207 177", // #81cfb1
		"--color-secondary-500": "75 186 144", // #4bba90
		"--color-secondary-600": "68 167 130", // #44a782
		"--color-secondary-700": "56 140 108", // #388c6c
		"--color-secondary-800": "45 112 86", // #2d7056
		"--color-secondary-900": "37 91 71", // #255b47
		// tertiary | #434a5e 
		"--color-tertiary-50": "227 228 231", // #e3e4e7
		"--color-tertiary-100": "217 219 223", // #d9dbdf
		"--color-tertiary-200": "208 210 215", // #d0d2d7
		"--color-tertiary-300": "180 183 191", // #b4b7bf
		"--color-tertiary-400": "123 128 142", // #7b808e
		"--color-tertiary-500": "67 74 94", // #434a5e
		"--color-tertiary-600": "60 67 85", // #3c4355
		"--color-tertiary-700": "50 56 71", // #323847
		"--color-tertiary-800": "40 44 56", // #282c38
		"--color-tertiary-900": "33 36 46", // #21242e
		// success | #544d22 
		"--color-success-50": "229 228 222", // #e5e4de
		"--color-success-100": "221 219 211", // #dddbd3
		"--color-success-200": "212 211 200", // #d4d3c8
		"--color-success-300": "187 184 167", // #bbb8a7
		"--color-success-400": "135 130 100", // #878264
		"--color-success-500": "84 77 34", // #544d22
		"--color-success-600": "76 69 31", // #4c451f
		"--color-success-700": "63 58 26", // #3f3a1a
		"--color-success-800": "50 46 20", // #322e14
		"--color-success-900": "41 38 17", // #292611
		// warning | #4784a0 
		"--color-warning-50": "227 237 241", // #e3edf1
		"--color-warning-100": "218 230 236", // #dae6ec
		"--color-warning-200": "209 224 231", // #d1e0e7
		"--color-warning-300": "181 206 217", // #b5ced9
		"--color-warning-400": "126 169 189", // #7ea9bd
		"--color-warning-500": "71 132 160", // #4784a0
		"--color-warning-600": "64 119 144", // #407790
		"--color-warning-700": "53 99 120", // #356378
		"--color-warning-800": "43 79 96", // #2b4f60
		"--color-warning-900": "35 65 78", // #23414e
		// error | #bc04da 
		"--color-error-50": "245 217 249", // #f5d9f9
		"--color-error-100": "242 205 248", // #f2cdf8
		"--color-error-200": "238 192 246", // #eec0f6
		"--color-error-300": "228 155 240", // #e49bf0
		"--color-error-400": "208 79 229", // #d04fe5
		"--color-error-500": "188 4 218", // #bc04da
		"--color-error-600": "169 4 196", // #a904c4
		"--color-error-700": "141 3 164", // #8d03a4
		"--color-error-800": "113 2 131", // #710283
		"--color-error-900": "92 2 107", // #5c026b
		// surface | #d9a7dd 
		"--color-surface-50": "249 242 250", // #f9f2fa
		"--color-surface-100": "247 237 248", // #f7edf8
		"--color-surface-200": "246 233 247", // #f6e9f7
		"--color-surface-300": "240 220 241", // #f0dcf1
		"--color-surface-400": "228 193 231", // #e4c1e7
		"--color-surface-500": "217 167 221", // #d9a7dd
		"--color-surface-600": "195 150 199", // #c396c7
		"--color-surface-700": "163 125 166", // #a37da6
		"--color-surface-800": "130 100 133", // #826485
		"--color-surface-900": "106 82 108", // #6a526c
		
	}
}