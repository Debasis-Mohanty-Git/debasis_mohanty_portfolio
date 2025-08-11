import { ArrowBigDown, Heart } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import { db } from '../firebase'
import { doc, getDoc, updateDoc, onSnapshot } from 'firebase/firestore'

const HomeSection = () => {
    const [likes, setLikes] = useState(0)
    const [liked, setLiked] = useState(false)

    // Document reference
    const likeDocRef = doc(db, "likes", "portfolio")

    useEffect(() => {
        // Real-time listener
        const unsubscribe = onSnapshot(likeDocRef, (docSnap) => {
            if (docSnap.exists()) {
                setLikes(docSnap.data().count)
            }
        })

        return () => unsubscribe()
    }, [])

    const handleLike = async () => {
        const docSnap = await getDoc(likeDocRef)

        if (docSnap.exists()) {
            const currentLikes = docSnap.data().count

            if (!liked) {
                await updateDoc(likeDocRef, { count: currentLikes + 1 })
                setLiked(true)
            } else {
                await updateDoc(likeDocRef, { count: currentLikes - 1 })
                setLiked(false)
            }
        }
    }

    return (
        <section className='relative min-h-screen flex flex-col items-center justify-center px-4' id="home">
            <div className='container max-w-4xl mx-auto text-center z-10'>
                <div className='space-y-6'>
                    <h1 className='text-4xl md:text-6xl tracking-tight'>
                        <span className='opacity-0 animate-fade-in'>Hi, I'm </span>
                        <span className='text-cyan-500 opacity-0 animate-fade-in-delay-1'>Debasis </span>
                        <span className='text-cyan-500 opacity-0 animate-fade-in-delay-2'>Mohanty</span>
                    </h1>

                    <p className='text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3'>
                        Hey there! I'm Debasis Mohanty — welcome to my portfolio.
                        I love turning ideas into real things on the web.
                        This site is where I share my journey and projects. 
                        Feel free to look around!
                    </p>

                    <div className="opacity-0 animate-fade-in-delay-4 pt-4">
                        <a className='cosmic-button' href="#projects">
                            Go To My Projects
                        </a>
                    </div>

                    {/* Like Button */}
                    <div className="flex justify-center items-center gap-2 pt-6">
                        <button
                            onClick={handleLike}
                            className="flex items-center gap-2 px-4 py-2 border rounded-full transition"
                        >
                            <Heart
                                className={`h-5 w-5 ${liked ? 'fill-red-500 text-red-500' : 'text-gray-500'}`}
                            />
                            <span>{likes}</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce'>
                <span className='text-sm text-muted-foreground mb-2'>Scroll</span>
                <ArrowBigDown className='h-5 w-5 text-cyan-600' />
            </div>
        </section>
    )
}

export default HomeSection
