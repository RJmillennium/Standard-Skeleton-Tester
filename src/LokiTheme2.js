
import { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme = {
    name: 'loki-theme-2',
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
		"--on-success": "255 255 255",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #fe90cc 
		"--color-primary-50": "255 238 247", // #ffeef7
		"--color-primary-100": "255 233 245", // #ffe9f5
		"--color-primary-200": "255 227 242", // #ffe3f2
		"--color-primary-300": "255 211 235", // #ffd3eb
		"--color-primary-400": "254 177 219", // #feb1db
		"--color-primary-500": "254 144 204", // #fe90cc
		"--color-primary-600": "229 130 184", // #e582b8
		"--color-primary-700": "191 108 153", // #bf6c99
		"--color-primary-800": "152 86 122", // #98567a
		"--color-primary-900": "124 71 100", // #7c4764
		// secondary | #71e908 
		"--color-secondary-50": "234 252 218", // #eafcda
		"--color-secondary-100": "227 251 206", // #e3fbce
		"--color-secondary-200": "220 250 193", // #dcfac1
		"--color-secondary-300": "198 246 156", // #c6f69c
		"--color-secondary-400": "156 240 82", // #9cf052
		"--color-secondary-500": "113 233 8", // #71e908
		"--color-secondary-600": "102 210 7", // #66d207
		"--color-secondary-700": "85 175 6", // #55af06
		"--color-secondary-800": "68 140 5", // #448c05
		"--color-secondary-900": "55 114 4", // #377204
		// tertiary | #92ee11 
		"--color-tertiary-50": "239 252 219", // #effcdb
		"--color-tertiary-100": "233 252 207", // #e9fccf
		"--color-tertiary-200": "228 251 196", // #e4fbc4
		"--color-tertiary-300": "211 248 160", // #d3f8a0
		"--color-tertiary-400": "179 243 88", // #b3f358
		"--color-tertiary-500": "146 238 17", // #92ee11
		"--color-tertiary-600": "131 214 15", // #83d60f
		"--color-tertiary-700": "110 179 13", // #6eb30d
		"--color-tertiary-800": "88 143 10", // #588f0a
		"--color-tertiary-900": "72 117 8", // #487508
		// success | #093033 
		"--color-success-50": "218 224 224", // #dae0e0
		"--color-success-100": "206 214 214", // #ced6d6
		"--color-success-200": "194 203 204", // #c2cbcc
		"--color-success-300": "157 172 173", // #9dacad
		"--color-success-400": "83 110 112", // #536e70
		"--color-success-500": "9 48 51", // #093033
		"--color-success-600": "8 43 46", // #082b2e
		"--color-success-700": "7 36 38", // #072426
		"--color-success-800": "5 29 31", // #051d1f
		"--color-success-900": "4 24 25", // #041819
		// warning | #f044a1 
		"--color-warning-50": "253 227 241", // #fde3f1
		"--color-warning-100": "252 218 236", // #fcdaec
		"--color-warning-200": "251 208 232", // #fbd0e8
		"--color-warning-300": "249 180 217", // #f9b4d9
		"--color-warning-400": "245 124 189", // #f57cbd
		"--color-warning-500": "240 68 161", // #f044a1
		"--color-warning-600": "216 61 145", // #d83d91
		"--color-warning-700": "180 51 121", // #b43379
		"--color-warning-800": "144 41 97", // #902961
		"--color-warning-900": "118 33 79", // #76214f
		// error | #928bce 
		"--color-error-50": "239 238 248", // #efeef8
		"--color-error-100": "233 232 245", // #e9e8f5
		"--color-error-200": "228 226 243", // #e4e2f3
		"--color-error-300": "211 209 235", // #d3d1eb
		"--color-error-400": "179 174 221", // #b3aedd
		"--color-error-500": "146 139 206", // #928bce
		"--color-error-600": "131 125 185", // #837db9
		"--color-error-700": "110 104 155", // #6e689b
		"--color-error-800": "88 83 124", // #58537c
		"--color-error-900": "72 68 101", // #484465
		// surface | #0b450a 
		"--color-surface-50": "218 227 218", // #dae3da
		"--color-surface-100": "206 218 206", // #cedace
		"--color-surface-200": "194 209 194", // #c2d1c2
		"--color-surface-300": "157 181 157", // #9db59d
		"--color-surface-400": "84 125 84", // #547d54
		"--color-surface-500": "11 69 10", // #0b450a
		"--color-surface-600": "10 62 9", // #0a3e09
		"--color-surface-700": "8 52 8", // #083408
		"--color-surface-800": "7 41 6", // #072906
		"--color-surface-900": "5 34 5", // #052205
		
	}
}