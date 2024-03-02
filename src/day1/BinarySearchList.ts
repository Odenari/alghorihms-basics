/* input array (haystack in out case) must be SORTED to make that alg work.
 * Find the middle =>
 * Check if middle value eq needle (or value that we looking for) =>
 * Check where the middle value is less or more to define what side we should check for value =>
 */

export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    /*
        We don't look for latest value 
        We setting hi border of range
        That isn't included in search range
	*/
    let hi = haystack.length;
    do {
        /*
		    Low + -> offset our low border (e.g if we not looking from 	start iw would be (2 + (10 - 2) / 2) -> 2 .... 5 is our range
		*/
        const middle = Math.floor(low + (hi - low) / 2);
        const value = haystack[middle];
        if (needle === value) return true;
        if (value > needle) {
            // needle in the left side so shift our hi border to middle
            hi = middle;
        } else {
            // needle in the right side so lower border is shifted to middle + 1 cuz we checked middle before
            low = middle + 1;
        }
    } while (low < hi);
    return false;
}
