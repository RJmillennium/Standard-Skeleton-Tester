
import { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme = {
    name: 'random-3',
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
		"--on-secondary": "255 255 255",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "0 0 0",
		// =~= Theme Colors  =~=
		// primary | #889e3b 
		"--color-primary-50": "237 240 226", // #edf0e2
		"--color-primary-100": "231 236 216", // #e7ecd8
		"--color-primary-200": "225 231 206", // #e1e7ce
		"--color-primary-300": "207 216 177", // #cfd8b1
		"--color-primary-400": "172 187 118", // #acbb76
		"--color-primary-500": "136 158 59", // #889e3b
		"--color-primary-600": "122 142 53", // #7a8e35
		"--color-primary-700": "102 119 44", // #66772c
		"--color-primary-800": "82 95 35", // #525f23
		"--color-primary-900": "67 77 29", // #434d1d
		// secondary | #906075 
		"--color-secondary-50": "238 231 234", // #eee7ea
		"--color-secondary-100": "233 223 227", // #e9dfe3
		"--color-secondary-200": "227 215 221", // #e3d7dd
		"--color-secondary-300": "211 191 200", // #d3bfc8
		"--color-secondary-400": "177 144 158", // #b1909e
		"--color-secondary-500": "144 96 117", // #906075
		"--color-secondary-600": "130 86 105", // #825669
		"--color-secondary-700": "108 72 88", // #6c4858
		"--color-secondary-800": "86 58 70", // #563a46
		"--color-secondary-900": "71 47 57", // #472f39
		// tertiary | #dd7439 
		"--color-tertiary-50": "250 234 225", // #faeae1
		"--color-tertiary-100": "248 227 215", // #f8e3d7
		"--color-tertiary-200": "247 220 206", // #f7dcce
		"--color-tertiary-300": "241 199 176", // #f1c7b0
		"--color-tertiary-400": "231 158 116", // #e79e74
		"--color-tertiary-500": "221 116 57", // #dd7439
		"--color-tertiary-600": "199 104 51", // #c76833
		"--color-tertiary-700": "166 87 43", // #a6572b
		"--color-tertiary-800": "133 70 34", // #854622
		"--color-tertiary-900": "108 57 28", // #6c391c
		// success | #11e9f8 
		"--color-success-50": "219 252 254", // #dbfcfe
		"--color-success-100": "207 251 254", // #cffbfe
		"--color-success-200": "196 250 253", // #c4fafd
		"--color-success-300": "160 246 252", // #a0f6fc
		"--color-success-400": "88 240 250", // #58f0fa
		"--color-success-500": "17 233 248", // #11e9f8
		"--color-success-600": "15 210 223", // #0fd2df
		"--color-success-700": "13 175 186", // #0dafba
		"--color-success-800": "10 140 149", // #0a8c95
		"--color-success-900": "8 114 122", // #08727a
		// warning | #e6e193 
		"--color-warning-50": "251 251 239", // #fbfbef
		"--color-warning-100": "250 249 233", // #faf9e9
		"--color-warning-200": "249 248 228", // #f9f8e4
		"--color-warning-300": "245 243 212", // #f5f3d4
		"--color-warning-400": "238 234 179", // #eeeab3
		"--color-warning-500": "230 225 147", // #e6e193
		"--color-warning-600": "207 203 132", // #cfcb84
		"--color-warning-700": "173 169 110", // #ada96e
		"--color-warning-800": "138 135 88", // #8a8758
		"--color-warning-900": "113 110 72", // #716e48
		// error | #698f52 
		"--color-error-50": "233 238 229", // #e9eee5
		"--color-error-100": "225 233 220", // #e1e9dc
		"--color-error-200": "218 227 212", // #dae3d4
		"--color-error-300": "195 210 186", // #c3d2ba
		"--color-error-400": "150 177 134", // #96b186
		"--color-error-500": "105 143 82", // #698f52
		"--color-error-600": "95 129 74", // #5f814a
		"--color-error-700": "79 107 62", // #4f6b3e
		"--color-error-800": "63 86 49", // #3f5631
		"--color-error-900": "51 70 40", // #334628
		// surface | #0fcbae 
		"--color-surface-50": "219 247 243", // #dbf7f3
		"--color-surface-100": "207 245 239", // #cff5ef
		"--color-surface-200": "195 242 235", // #c3f2eb
		"--color-surface-300": "159 234 223", // #9feadf
		"--color-surface-400": "87 219 198", // #57dbc6
		"--color-surface-500": "15 203 174", // #0fcbae
		"--color-surface-600": "14 183 157", // #0eb79d
		"--color-surface-700": "11 152 131", // #0b9883
		"--color-surface-800": "9 122 104", // #097a68
		"--color-surface-900": "7 99 85", // #076355
		
	}
}