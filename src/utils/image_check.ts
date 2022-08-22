
//typescript helper for ItemAdded modal checks whether it is safe to call an image url  from an array.
export const image_check = (images: string[] | undefined)=> {
    if (images !==undefined) {
      if (images[0] !== undefined) {
        return images[0]
      }
      return ''
    }
    return ''
}