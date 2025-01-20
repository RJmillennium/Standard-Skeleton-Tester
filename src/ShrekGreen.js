
import { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme = {
    name: 'shrek-green',
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
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #a9733c 
		"--color-primary-50": "242 234 226", // #f2eae2
		"--color-primary-100": "238 227 216", // #eee3d8
		"--color-primary-200": "234 220 206", // #eadcce
		"--color-primary-300": "221 199 177", // #ddc7b1
		"--color-primary-400": "195 157 119", // #c39d77
		"--color-primary-500": "169 115 60", // #a9733c
		"--color-primary-600": "152 104 54", // #986836
		"--color-primary-700": "127 86 45", // #7f562d
		"--color-primary-800": "101 69 36", // #654524
		"--color-primary-900": "83 56 29", // #53381d
		// secondary | #442abb 
		"--color-secondary-50": "227 223 245", // #e3dff5
		"--color-secondary-100": "218 212 241", // #dad4f1
		"--color-secondary-200": "208 202 238", // #d0caee
		"--color-secondary-300": "180 170 228", // #b4aae4
		"--color-secondary-400": "124 106 207", // #7c6acf
		"--color-secondary-500": "68 42 187", // #442abb
		"--color-secondary-600": "61 38 168", // #3d26a8
		"--color-secondary-700": "51 32 140", // #33208c
		"--color-secondary-800": "41 25 112", // #291970
		"--color-secondary-900": "33 21 92", // #21155c
		// tertiary | #fb864d 
		"--color-tertiary-50": "254 237 228", // #feede4
		"--color-tertiary-100": "254 231 219", // #fee7db
		"--color-tertiary-200": "254 225 211", // #fee1d3
		"--color-tertiary-300": "253 207 184", // #fdcfb8
		"--color-tertiary-400": "252 170 130", // #fcaa82
		"--color-tertiary-500": "251 134 77", // #fb864d
		"--color-tertiary-600": "226 121 69", // #e27945
		"--color-tertiary-700": "188 101 58", // #bc653a
		"--color-tertiary-800": "151 80 46", // #97502e
		"--color-tertiary-900": "123 66 38", // #7b4226
		// success | #80a3fd 
		"--color-success-50": "236 241 255", // #ecf1ff
		"--color-success-100": "230 237 255", // #e6edff
		"--color-success-200": "223 232 255", // #dfe8ff
		"--color-success-300": "204 218 254", // #ccdafe
		"--color-success-400": "166 191 254", // #a6bffe
		"--color-success-500": "128 163 253", // #80a3fd
		"--color-success-600": "115 147 228", // #7393e4
		"--color-success-700": "96 122 190", // #607abe
		"--color-success-800": "77 98 152", // #4d6298
		"--color-success-900": "63 80 124", // #3f507c
		// warning | #b89420 
		"--color-warning-50": "244 239 222", // #f4efde
		"--color-warning-100": "241 234 210", // #f1ead2
		"--color-warning-200": "237 228 199", // #ede4c7
		"--color-warning-300": "227 212 166", // #e3d4a6
		"--color-warning-400": "205 180 99", // #cdb463
		"--color-warning-500": "184 148 32", // #b89420
		"--color-warning-600": "166 133 29", // #a6851d
		"--color-warning-700": "138 111 24", // #8a6f18
		"--color-warning-800": "110 89 19", // #6e5913
		"--color-warning-900": "90 73 16", // #5a4910
		// error | #592ecc 
		"--color-error-50": "230 224 247", // #e6e0f7
		"--color-error-100": "222 213 245", // #ded5f5
		"--color-error-200": "214 203 242", // #d6cbf2
		"--color-error-300": "189 171 235", // #bdabeb
		"--color-error-400": "139 109 219", // #8b6ddb
		"--color-error-500": "89 46 204", // #592ecc
		"--color-error-600": "80 41 184", // #5029b8
		"--color-error-700": "67 35 153", // #432399
		"--color-error-800": "53 28 122", // #351c7a
		"--color-error-900": "44 23 100", // #2c1764
		// surface | #6C9E4F 
		"--color-surface-50": "233 240 229", // #e9f0e5
		"--color-surface-100": "226 236 220", // #e2ecdc
		"--color-surface-200": "218 231 211", // #dae7d3
		"--color-surface-300": "196 216 185", // #c4d8b9
		"--color-surface-400": "152 187 132", // #98bb84
		"--color-surface-500": "108 158 79", // #6C9E4F
		"--color-surface-600": "97 142 71", // #618e47
		"--color-surface-700": "81 119 59", // #51773b
		"--color-surface-800": "65 95 47", // #415f2f
		"--color-surface-900": "53 77 39", // #354d27
		
	}
}