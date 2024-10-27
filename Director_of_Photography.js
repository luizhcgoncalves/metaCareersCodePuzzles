/**
 * @param {number} N Length of String C
 * @param {string} C String with studio positioning 
 * @param {number} X Minimum distance
 * @param {number} Y Maximum distance
 * @return {number}
 */
function getArtisticPhotographCount(N, C, X, Y) {
    /* C -> String with studio positioning
    *       - "P" for a place containing a Photographer
    *       - "A" for a place containing an Actor
    *       - "B" for a place containing a backdrop
    *       - "." for a place that must be left empty
    * 
    *  Constraints: 
    *       - An Actor must be between a Photographer and a Backdrop, and within X (min) and Y (max) distances (inclusive)
    *       - Artistic Photo: 
    *           . Must have an Actor in the middle of a Photographer and a Backdrop
    *           . The distance between the Photographer and the Actor, and the Actor and the Backdrop, must NOT exceed X and Y, inclusive
    * 
    *  How many artistic photos can be taken considering a given string C? 
    */
    let artisticPhotosCount = 0;

    for (let photographer = 0; photographer < N; photographer++) {
        if (C[photographer] === 'P') {
            for (let actor = 0; actor < N; actor++) {
                if (C[actor] === 'A') {
                    for (let backdrop = 0; backdrop < N; backdrop++) {
                        if (C[backdrop] === 'B' && (photographer - actor) * (actor - backdrop) > 0) {

                            const distancePhotographerActor = Math.abs(photographer - actor);
                            const distanceActorBackdrop = Math.abs(actor - backdrop);

                            artisticPhotosCount += X <= distancePhotographerActor
                                                    && distancePhotographerActor <= Y
                                                    && X <= distanceActorBackdrop
                                                    && distanceActorBackdrop <= Y
                                                ? 1
                                                : 0
                        }
                    }
                }
            }
        }
    }

    return artisticPhotosCount;
}

// getArtisticPhotographCount(5, 'APABA', 1, 2);
// getArtisticPhotographCount(5, 'APABA', 2, 3);
// getArtisticPhotographCount(8, '.PBAAP.B', 1, 3);
// getArtisticPhotographCount(7, 'BAPAPAB', 1, 2)

console.log(getArtisticPhotographCount(5, 'APABA', 1, 2));
console.log(getArtisticPhotographCount(5, 'APABA', 2, 3));
console.log(getArtisticPhotographCount(8, '.PBAAP.B', 1, 3));
console.log(getArtisticPhotographCount(7, 'BAPAPAB', 1, 2));