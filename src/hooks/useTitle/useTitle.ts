import { useEffect } from 'react'

/**
 * UseTitle hook to set the document page title (the text shown in the browser title).
 * It will update the title as soon as the component mounts
 * and reverts it to the previous title when it unmounts.
 *
 * Usage: Import the useTitle hook and set the title inside a component by.
 *
 * @example
 * Export function Home(){
 *      useTitle("Homepage");
 *      return(<h1>Home</h1>)
 * }.
 * @param {string} title
 */
export function useTitle (title: string): void {
  const appendDefaultText = ' | Userneeds Member Portal'
  useEffect(() => {
    const previousTitle = document.title
    document.title      = title + appendDefaultText
    return () => {
      document.title = previousTitle + appendDefaultText
    }
  })
}
