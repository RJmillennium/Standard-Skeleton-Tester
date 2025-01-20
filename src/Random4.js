
import { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme = {
    name: 'random-4',
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
		"--on-tertiary": "255 255 255",
		"--on-success": "0 0 0",
		"--on-warning": "255 255 255",
		"--on-error": "0 0 0",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #c4ca3a 
		"--color-primary-50": "246 247 225", // #f6f7e1
		"--color-primary-100": "243 244 216", // #f3f4d8
		"--color-primary-200": "240 242 206", // #f0f2ce
		"--color-primary-300": "231 234 176", // #e7eab0
		"--color-primary-400": "214 218 117", // #d6da75
		"--color-primary-500": "196 202 58", // #c4ca3a
		"--color-primary-600": "176 182 52", // #b0b634
		"--color-primary-700": "147 152 44", // #93982c
		"--color-primary-800": "118 121 35", // #767923
		"--color-primary-900": "96 99 28", // #60631c
		// secondary | #741e66 
		"--color-secondary-50": "234 221 232", // #eadde8
		"--color-secondary-100": "227 210 224", // #e3d2e0
		"--color-secondary-200": "220 199 217", // #dcc7d9
		"--color-secondary-300": "199 165 194", // #c7a5c2
		"--color-secondary-400": "158 98 148", // #9e6294
		"--color-secondary-500": "116 30 102", // #741e66
		"--color-secondary-600": "104 27 92", // #681b5c
		"--color-secondary-700": "87 23 77", // #57174d
		"--color-secondary-800": "70 18 61", // #46123d
		"--color-secondary-900": "57 15 50", // #390f32
		// tertiary | #0c2b05 
		"--color-tertiary-50": "219 223 218", // #dbdfda
		"--color-tertiary-100": "206 213 205", // #ced5cd
		"--color-tertiary-200": "194 202 193", // #c2cac1
		"--color-tertiary-300": "158 170 155", // #9eaa9b
		"--color-tertiary-400": "85 107 80", // #556b50
		"--color-tertiary-500": "12 43 5", // #0c2b05
		"--color-tertiary-600": "11 39 5", // #0b2705
		"--color-tertiary-700": "9 32 4", // #092004
		"--color-tertiary-800": "7 26 3", // #071a03
		"--color-tertiary-900": "6 21 2", // #061502
		// success | #27f7cc 
		"--color-success-50": "223 254 247", // #dffef7
		"--color-success-100": "212 253 245", // #d4fdf5
		"--color-success-200": "201 253 242", // #c9fdf2
		"--color-success-300": "169 252 235", // #a9fceb
		"--color-success-400": "104 249 219", // #68f9db
		"--color-success-500": "39 247 204", // #27f7cc
		"--color-success-600": "35 222 184", // #23deb8
		"--color-success-700": "29 185 153", // #1db999
		"--color-success-800": "23 148 122", // #17947a
		"--color-success-900": "19 121 100", // #137964
		// warning | #754ffe 
		"--color-warning-50": "234 229 255", // #eae5ff
		"--color-warning-100": "227 220 255", // #e3dcff
		"--color-warning-200": "221 211 255", // #ddd3ff
		"--color-warning-300": "200 185 255", // #c8b9ff
		"--color-warning-400": "158 132 254", // #9e84fe
		"--color-warning-500": "117 79 254", // #754ffe
		"--color-warning-600": "105 71 229", // #6947e5
		"--color-warning-700": "88 59 191", // #583bbf
		"--color-warning-800": "70 47 152", // #462f98
		"--color-warning-900": "57 39 124", // #39277c
		// error | #62d5c3 
		"--color-error-50": "231 249 246", // #e7f9f6
		"--color-error-100": "224 247 243", // #e0f7f3
		"--color-error-200": "216 245 240", // #d8f5f0
		"--color-error-300": "192 238 231", // #c0eee7
		"--color-error-400": "145 226 213", // #91e2d5
		"--color-error-500": "98 213 195", // #62d5c3
		"--color-error-600": "88 192 176", // #58c0b0
		"--color-error-700": "74 160 146", // #4aa092
		"--color-error-800": "59 128 117", // #3b8075
		"--color-error-900": "48 104 96", // #306860
		// surface | #004a76 
		"--color-surface-50": "217 228 234", // #d9e4ea
		"--color-surface-100": "204 219 228", // #ccdbe4
		"--color-surface-200": "191 210 221", // #bfd2dd
		"--color-surface-300": "153 183 200", // #99b7c8
		"--color-surface-400": "77 128 159", // #4d809f
		"--color-surface-500": "0 74 118", // #004a76
		"--color-surface-600": "0 67 106", // #00436a
		"--color-surface-700": "0 56 89", // #003859
		"--color-surface-800": "0 44 71", // #002c47
		"--color-surface-900": "0 36 58", // #00243a
		
	}
}