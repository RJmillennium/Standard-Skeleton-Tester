
import { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme = {
    name: 'random-1',
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
		"--on-warning": "255 255 255",
		"--on-error": "255 255 255",
		"--on-surface": "0 0 0",
		// =~= Theme Colors  =~=
		// primary | #eb6466 
		"--color-primary-50": "252 232 232", // #fce8e8
		"--color-primary-100": "251 224 224", // #fbe0e0
		"--color-primary-200": "250 216 217", // #fad8d9
		"--color-primary-300": "247 193 194", // #f7c1c2
		"--color-primary-400": "241 147 148", // #f19394
		"--color-primary-500": "235 100 102", // #eb6466
		"--color-primary-600": "212 90 92", // #d45a5c
		"--color-primary-700": "176 75 77", // #b04b4d
		"--color-primary-800": "141 60 61", // #8d3c3d
		"--color-primary-900": "115 49 50", // #733132
		// secondary | #12d184 
		"--color-secondary-50": "219 248 237", // #dbf8ed
		"--color-secondary-100": "208 246 230", // #d0f6e6
		"--color-secondary-200": "196 244 224", // #c4f4e0
		"--color-secondary-300": "160 237 206", // #a0edce
		"--color-secondary-400": "89 223 169", // #59dfa9
		"--color-secondary-500": "18 209 132", // #12d184
		"--color-secondary-600": "16 188 119", // #10bc77
		"--color-secondary-700": "14 157 99", // #0e9d63
		"--color-secondary-800": "11 125 79", // #0b7d4f
		"--color-secondary-900": "9 102 65", // #096641
		// tertiary | #c1a11d 
		"--color-tertiary-50": "246 241 221", // #f6f1dd
		"--color-tertiary-100": "243 236 210", // #f3ecd2
		"--color-tertiary-200": "240 232 199", // #f0e8c7
		"--color-tertiary-300": "230 217 165", // #e6d9a5
		"--color-tertiary-400": "212 189 97", // #d4bd61
		"--color-tertiary-500": "193 161 29", // #c1a11d
		"--color-tertiary-600": "174 145 26", // #ae911a
		"--color-tertiary-700": "145 121 22", // #917916
		"--color-tertiary-800": "116 97 17", // #746111
		"--color-tertiary-900": "95 79 14", // #5f4f0e
		// success | #3184bb 
		"--color-success-50": "224 237 245", // #e0edf5
		"--color-success-100": "214 230 241", // #d6e6f1
		"--color-success-200": "204 224 238", // #cce0ee
		"--color-success-300": "173 206 228", // #adcee4
		"--color-success-400": "111 169 207", // #6fa9cf
		"--color-success-500": "49 132 187", // #3184bb
		"--color-success-600": "44 119 168", // #2c77a8
		"--color-success-700": "37 99 140", // #25638c
		"--color-success-800": "29 79 112", // #1d4f70
		"--color-success-900": "24 65 92", // #18415c
		// warning | #342929 
		"--color-warning-50": "225 223 223", // #e1dfdf
		"--color-warning-100": "214 212 212", // #d6d4d4
		"--color-warning-200": "204 202 202", // #cccaca
		"--color-warning-300": "174 169 169", // #aea9a9
		"--color-warning-400": "113 105 105", // #716969
		"--color-warning-500": "52 41 41", // #342929
		"--color-warning-600": "47 37 37", // #2f2525
		"--color-warning-700": "39 31 31", // #271f1f
		"--color-warning-800": "31 25 25", // #1f1919
		"--color-warning-900": "25 20 20", // #191414
		// error | #32756c 
		"--color-error-50": "224 234 233", // #e0eae9
		"--color-error-100": "214 227 226", // #d6e3e2
		"--color-error-200": "204 221 218", // #ccddda
		"--color-error-300": "173 200 196", // #adc8c4
		"--color-error-400": "112 158 152", // #709e98
		"--color-error-500": "50 117 108", // #32756c
		"--color-error-600": "45 105 97", // #2d6961
		"--color-error-700": "38 88 81", // #265851
		"--color-error-800": "30 70 65", // #1e4641
		"--color-error-900": "25 57 53", // #193935
		// surface | #6d83d2 
		"--color-surface-50": "233 236 248", // #e9ecf8
		"--color-surface-100": "226 230 246", // #e2e6f6
		"--color-surface-200": "219 224 244", // #dbe0f4
		"--color-surface-300": "197 205 237", // #c5cded
		"--color-surface-400": "153 168 224", // #99a8e0
		"--color-surface-500": "109 131 210", // #6d83d2
		"--color-surface-600": "98 118 189", // #6276bd
		"--color-surface-700": "82 98 158", // #52629e
		"--color-surface-800": "65 79 126", // #414f7e
		"--color-surface-900": "53 64 103", // #354067
		
	}
}