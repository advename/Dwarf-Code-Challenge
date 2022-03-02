import React from 'react'

import type { Keyable } from '../../types/globals'

type LogoProps = {
  /**
   * Logo size (in px).
   */
  size?: string;
}

/**
 * Company Logo
 * Ran through https://react-svgr.com/ for optimization,
 * consistent usage, and no file source import issues.
 *
 * SVG Source: https://www.svgrepo.com/svg/57542/beach.
 *
 * @param {LogoProps} props
 * @returns { JSX.Element }
 */
function Logo(props: LogoProps): JSX.Element {
  return (
    <div style={{
      height: 'auto',
      width: props?.size ? `${props.size}` : '40px',
    }}
    >
      <svg
        viewBox="0 0 470 470"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M401.17 68.83C356.784 24.444 297.771 0 235 0S113.216 24.444 68.83 68.83C24.444 113.215 0 172.229 0 235s24.444 121.785 68.83 166.17C113.216 445.556 172.229 470 235 470s121.784-24.444 166.17-68.83C445.556 356.785 470 297.771 470 235s-24.444-121.785-68.83-166.17zM235 455c-121.309 0-220-98.691-220-220S113.691 15 235 15s220 98.691 220 220-98.691 220-220 220z" />
        <path d="M425.22 311.407C434.744 287.781 440 261.994 440 235c0-.939-.002-1.878-.016-2.814a7.502 7.502 0 0 0-2.595-5.569c-11.436-9.885-25.175-17.239-39.73-21.268a8.04 8.04 0 0 0-.91-.19c-.055-.008-.11-.011-.166-.018a7.497 7.497 0 0 0-.705-.054c-.089-.003-.177-.003-.266-.003a7.284 7.284 0 0 0-.624.032c-.09.008-.18.013-.27.024a7.46 7.46 0 0 0-.77.139c-.057.013-.113.028-.169.042-.253.066-.5.143-.74.233-.083.031-.164.068-.245.102a7.142 7.142 0 0 0-.803.387 7.511 7.511 0 0 0-.606.379c-.044.031-.09.058-.133.09a7.617 7.617 0 0 0-.694.57c-16.284 15.24-27.043 35.15-30.887 56.813-20.515-5.123-42.366-5.012-63.435.915a8.079 8.079 0 0 0-.88.31c-.046.019-.09.042-.135.063a7.535 7.535 0 0 0-1.41.825c-.063.047-.128.09-.189.139a7.715 7.715 0 0 0-.656.577 7.447 7.447 0 0 0-.583.662c-.047.06-.09.123-.136.185a7.53 7.53 0 0 0-.83 1.422c-.019.042-.04.082-.058.125a7.581 7.581 0 0 0-.302.857c-12.093 42.989-.051 89.226 31.417 120.696a124.7 124.7 0 0 0 8.857 8.038 188.715 188.715 0 0 1-60.884 22.964l-15.101-245.408 80.513 67.847a7.502 7.502 0 0 0 7.234 1.37 7.502 7.502 0 0 0 4.92-5.478c6.152-27.667-1.702-56.085-20.586-76.515l44.891 3.234a7.501 7.501 0 0 0 7.419-10.466c-11.285-25.999-34.343-44.373-61.629-49.801l38.219-23.771a7.5 7.5 0 0 0-.15-12.829c-27.527-16.238-61.47-15.848-88.58 1.015-14.558 9.054-25.704 22.723-32.509 39.137-6.731-16.392-17.865-29.922-32.682-39.137-27.111-16.862-61.053-17.252-88.58-1.015a7.501 7.501 0 0 0-.15 12.829l38.219 23.771c-27.286 5.427-50.344 23.802-61.629 49.801a7.5 7.5 0 0 0 7.419 10.466l44.891-3.234c-18.885 20.43-26.738 48.848-20.586 76.515a7.502 7.502 0 0 0 12.154 4.108l80.513-67.847-15.103 245.405a188.706 188.706 0 0 1-60.884-22.964 124.729 124.729 0 0 0 8.858-8.039c31.468-31.469 43.51-77.707 31.426-120.669a8.011 8.011 0 0 0-.311-.883c-.018-.042-.039-.083-.058-.125a7.35 7.35 0 0 0-.831-1.421c-.046-.062-.088-.125-.136-.185a7.423 7.423 0 0 0-.578-.657 7.58 7.58 0 0 0-.661-.583c-.061-.048-.125-.091-.187-.137a7.136 7.136 0 0 0-.552-.374c-.068-.041-.136-.082-.205-.121a7.137 7.137 0 0 0-.659-.333c-.043-.019-.085-.041-.129-.06a7.39 7.39 0 0 0-.853-.301 123.594 123.594 0 0 0-63.464-.924c-3.843-21.663-14.603-41.574-30.863-56.794a7.827 7.827 0 0 0-.72-.591c-.042-.031-.086-.057-.129-.087a7.198 7.198 0 0 0-1.416-.77c-.08-.033-.159-.069-.241-.1a7.45 7.45 0 0 0-1.689-.416c-.078-.01-.157-.014-.236-.021a7.597 7.597 0 0 0-.672-.034c-.074 0-.147 0-.221.002a7.457 7.457 0 0 0-.779.06c-.032.004-.064.006-.096.011a7.39 7.39 0 0 0-.915.191c-14.568 4.031-28.307 11.386-39.743 21.271a7.505 7.505 0 0 0-2.595 5.569A203.03 203.03 0 0 0 30 235c0 26.994 5.256 52.781 14.78 76.406.019.049.04.098.06.146 15.519 38.411 42.346 71.082 76.34 93.861.047.032.094.062.142.093 24.707 16.526 53.188 27.826 83.853 32.316.158.029.319.049.48.067C215.242 439.271 225.037 440 235 440s19.758-.729 29.346-2.109c.161-.019.322-.039.48-.067 30.666-4.49 59.147-15.79 83.855-32.317l.139-.091c33.995-22.78 60.822-55.451 76.341-93.862.019-.05.041-.098.059-.147zm-33.501-83.443 8.303 33.758a7.504 7.504 0 0 0 7.277 5.71 7.5 7.5 0 0 0 7.289-9.293l-8.297-33.732c6.674 3.017 12.992 6.851 18.706 11.414-.088 20.571-3.474 40.375-9.635 58.925a122.806 122.806 0 0 0-41.234-26.28 86.993 86.993 0 0 1 17.591-40.502zm-56.693-4.172-83.206-70.116a7.013 7.013 0 0 0-.281-.236l-1.201-1.012a70.761 70.761 0 0 1 14.337-1.457c16.555 0 32.654 5.884 45.334 16.569 16.757 14.119 25.767 34.859 25.017 56.252zm24.677-73.02-53.237-3.835c-12.696-7.13-27.092-10.967-41.791-10.967-2.964 0-5.907.16-8.827.459 13.828-11.717 31.847-17.805 50.551-16.461 21.856 1.575 41.336 13.057 53.304 30.804zm-84.185-67.168c18.605-11.572 41.114-13.734 61.229-6.41l-45.279 28.163a85.068 85.068 0 0 0-45.825 20.049c4.893-17.879 15.313-32.745 29.875-41.802zm-81.036 0c14.852 9.237 25.213 23.937 30.004 41.915a85.062 85.062 0 0 0-45.955-20.164l-45.279-28.162c20.117-7.322 42.624-5.161 61.23 6.411zm-30.881 36.364c18.701-1.348 36.723 4.743 50.552 16.462a86.614 86.614 0 0 0-8.828-.46c-14.699 0-29.094 3.838-41.791 10.967l-53.237 3.835c11.968-17.747 31.448-29.229 53.304-30.804zm-3.611 47.572c12.68-10.685 28.779-16.569 45.334-16.569 4.855 0 9.646.488 14.337 1.457l-84.688 71.364c-.749-21.393 8.261-42.133 25.017-56.252zm-96.282 56.866-8.297 33.732a7.5 7.5 0 0 0 14.566 3.583l8.303-33.758a86.99 86.99 0 0 1 17.59 40.502 122.797 122.797 0 0 0-41.234 26.28c-6.161-18.55-9.547-38.355-9.635-58.926 5.716-4.562 12.033-8.396 18.707-11.413zm-3.194 85.761a110.185 110.185 0 0 1 3.188-3.325c24.486-24.487 59.163-35.566 93.002-30.391l-57.783 57.783a7.5 7.5 0 0 0 5.304 12.803 7.478 7.478 0 0 0 5.304-2.197l57.782-57.782c5.174 33.841-5.904 68.515-30.39 93.002a109.556 109.556 0 0 1-11.552 10.039c-28.32-20.078-50.921-47.711-64.855-79.932zm153.932 113.717 1.607-26.118H231c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-14.024l13.529-219.861 4.495-3.788 4.495 3.788 9.824 159.652h-5.98c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h6.903l5.312 86.328C248.8 424.614 241.945 425 235 425s-13.8-.386-20.554-1.116zm130.186-33.785a109.561 109.561 0 0 1-11.552-10.038c-24.487-24.487-35.565-59.161-30.391-93.002l57.783 57.783c1.465 1.464 3.385 2.197 5.304 2.197s3.839-.732 5.304-2.197a7.5 7.5 0 0 0 0-10.606l-57.784-57.784c33.839-5.173 68.515 5.903 93.004 30.391a108.944 108.944 0 0 1 3.187 3.324c-13.935 32.221-36.535 59.854-64.855 79.932z" />
      </svg>
    </div>
  )
}

export {
  Logo,
}
export type {
  LogoProps,
}
