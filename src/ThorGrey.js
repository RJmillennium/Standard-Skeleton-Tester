
import { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme = {
    name: 'thor-grey',
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
		// primary | #7af9d2 
		"--color-primary-50": "235 254 248", // #ebfef8
		"--color-primary-100": "228 254 246", // #e4fef6
		"--color-primary-200": "222 254 244", // #defef4
		"--color-primary-300": "202 253 237", // #cafded
		"--color-primary-400": "162 251 224", // #a2fbe0
		"--color-primary-500": "122 249 210", // #7af9d2
		"--color-primary-600": "110 224 189", // #6ee0bd
		"--color-primary-700": "92 187 158", // #5cbb9e
		"--color-primary-800": "73 149 126", // #49957e
		"--color-primary-900": "60 122 103", // #3c7a67
		// secondary | #f562ab 
		"--color-secondary-50": "254 231 242", // #fee7f2
		"--color-secondary-100": "253 224 238", // #fde0ee
		"--color-secondary-200": "253 216 234", // #fdd8ea
		"--color-secondary-300": "251 192 221", // #fbc0dd
		"--color-secondary-400": "248 145 196", // #f891c4
		"--color-secondary-500": "245 98 171", // #f562ab
		"--color-secondary-600": "221 88 154", // #dd589a
		"--color-secondary-700": "184 74 128", // #b84a80
		"--color-secondary-800": "147 59 103", // #933b67
		"--color-secondary-900": "120 48 84", // #783054
		// tertiary | #488597 
		"--color-tertiary-50": "228 237 239", // #e4edef
		"--color-tertiary-100": "218 231 234", // #dae7ea
		"--color-tertiary-200": "209 225 229", // #d1e1e5
		"--color-tertiary-300": "182 206 213", // #b6ced5
		"--color-tertiary-400": "127 170 182", // #7faab6
		"--color-tertiary-500": "72 133 151", // #488597
		"--color-tertiary-600": "65 120 136", // #417888
		"--color-tertiary-700": "54 100 113", // #366471
		"--color-tertiary-800": "43 80 91", // #2b505b
		"--color-tertiary-900": "35 65 74", // #23414a
		// success | #a5adef 
		"--color-success-50": "242 243 253", // #f2f3fd
		"--color-success-100": "237 239 252", // #edeffc
		"--color-success-200": "233 235 251", // #e9ebfb
		"--color-success-300": "219 222 249", // #dbdef9
		"--color-success-400": "192 198 244", // #c0c6f4
		"--color-success-500": "165 173 239", // #a5adef
		"--color-success-600": "149 156 215", // #959cd7
		"--color-success-700": "124 130 179", // #7c82b3
		"--color-success-800": "99 104 143", // #63688f
		"--color-success-900": "81 85 117", // #515575
		// warning | #1ac5d5 
		"--color-warning-50": "221 246 249", // #ddf6f9
		"--color-warning-100": "209 243 247", // #d1f3f7
		"--color-warning-200": "198 241 245", // #c6f1f5
		"--color-warning-300": "163 232 238", // #a3e8ee
		"--color-warning-400": "95 214 226", // #5fd6e2
		"--color-warning-500": "26 197 213", // #1ac5d5
		"--color-warning-600": "23 177 192", // #17b1c0
		"--color-warning-700": "20 148 160", // #1494a0
		"--color-warning-800": "16 118 128", // #107680
		"--color-warning-900": "13 97 104", // #0d6168
		// error | #c2b80a 
		"--color-error-50": "246 244 218", // #f6f4da
		"--color-error-100": "243 241 206", // #f3f1ce
		"--color-error-200": "240 237 194", // #f0edc2
		"--color-error-300": "231 227 157", // #e7e39d
		"--color-error-400": "212 205 84", // #d4cd54
		"--color-error-500": "194 184 10", // #c2b80a
		"--color-error-600": "175 166 9", // #afa609
		"--color-error-700": "146 138 8", // #928a08
		"--color-error-800": "116 110 6", // #746e06
		"--color-error-900": "95 90 5", // #5f5a05
		// surface | #607D8B 
		"--color-surface-50": "231 236 238", // #e7ecee
		"--color-surface-100": "223 229 232", // #dfe5e8
		"--color-surface-200": "215 223 226", // #d7dfe2
		"--color-surface-300": "191 203 209", // #bfcbd1
		"--color-surface-400": "144 164 174", // #90a4ae
		"--color-surface-500": "96 125 139", // #607D8B
		"--color-surface-600": "86 113 125", // #56717d
		"--color-surface-700": "72 94 104", // #485e68
		"--color-surface-800": "58 75 83", // #3a4b53
		"--color-surface-900": "47 61 68", // #2f3d44
		
	}
}