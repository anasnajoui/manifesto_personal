'use client'; // Required for hooks like useState, useEffect, useRef

import Image from "next/image";
import { useState, useRef, useEffect } from 'react'; // Removed useCallback

export default function Home() {
  // State for audio player
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // Reference to the audio element
  const audioRef = useRef<HTMLAudioElement>(null);
  // Reference to the progress bar
  const progressBarRef = useRef<HTMLInputElement>(null);

  // Set duration and current time when metadata loads
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const setAudioData = () => {
        // Ensure duration is a valid finite number
        if (isFinite(audio.duration)) {
          setDuration(audio.duration);
        } else {
          setDuration(0); // Fallback if duration is invalid
        }
        setCurrentTime(audio.currentTime);
      };

      const setAudioTime = () => setCurrentTime(audio.currentTime);

      // If metadata is already loaded (e.g., cached)
      if (audio.readyState >= 1) {
        setAudioData();
      }

      audio.addEventListener('loadedmetadata', setAudioData);
      audio.addEventListener('timeupdate', setAudioTime);

      // Clean up listeners on component unmount
      return () => {
        audio.removeEventListener('loadedmetadata', setAudioData);
        audio.removeEventListener('timeupdate', setAudioTime);
      };
    }
  }, []);

  // Update isPlaying state based on actual audio events (robust way)
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
        const handlePlay = () => setIsPlaying(true);
        const handlePause = () => setIsPlaying(false);

        audio.addEventListener('play', handlePlay);
        audio.addEventListener('pause', handlePause);
        audio.addEventListener('ended', handlePause); // Also set to paused when track ends

        // Initial check in case autoplay worked but state is false
        setIsPlaying(!audio.paused);

        return () => {
            audio.removeEventListener('play', handlePlay);
            audio.removeEventListener('pause', handlePause);
            audio.removeEventListener('ended', handlePause);
        };
    }
  }, []);

  // Toggle play/pause manually via button
  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;
    
    if (audio.paused) {
      audio.play().catch(error => console.error("Audio play failed:", error));
    } else {
      audio.pause();
    }
    // State is updated via event listeners
  };

  // Function to handle progress bar change
  const handleProgressChange = () => {
    const audio = audioRef.current;
    const progressBar = progressBarRef.current;
    if (audio && progressBar) {
      audio.currentTime = Number(progressBar.value);
      // setCurrentTime(Number(progressBar.value)); // timeupdate listener handles this
    }
  };

  // Update progress bar range and value
  useEffect(() => {
    const progressBar = progressBarRef.current;
    const audio = audioRef.current;
    if (progressBar && audio) {
      progressBar.max = String(duration); // Update max when duration is known
      progressBar.value = String(currentTime);
      
      // Update visual fill percentage
      const percentage = duration > 0 ? (currentTime / duration) * 100 : 0;
      progressBar.style.background = `linear-gradient(to right, #FF6347 ${percentage}%, #404040 ${percentage}%)`;
    }
  }, [currentTime, duration]);

  // Function to format time (e.g., 01:30)
  const formatTime = (time: number) => {
    if (isNaN(time) || !isFinite(time)) {
        return '0:00'; // Handle NaN or Infinite duration/time
    }
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="manifesto-container">
        <section className="text-block">
            <h2> WHO ARE YOU?</h2>

            {/* Hidden Audio Element with autoPlay */}
            <audio ref={audioRef} className="audio-element-hidden" autoPlay>
              <source src="/audio/Narcissus.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>

            {/* Custom Audio Controls UI */}
            <div className="custom-audio-player">
              <button onClick={togglePlayPause} className="play-pause-button" aria-label={isPlaying ? "Pause" : "Play"}>
                {isPlaying ? '❚❚' : '▶'}
              </button>
              <span className="time-display current-time">{formatTime(currentTime)}</span>
              <input
                ref={progressBarRef}
                type="range"
                className="progress-bar"
                value={currentTime} 
                step="0.1" 
                min="0"
                max={duration || 100} 
                onChange={handleProgressChange}
                aria-label="Audio progress"
              />
              <span className="time-display duration">{formatTime(duration)}</span>
            </div>
        </section>
        <section className="text-block">
            <p>I am no accident of fate—I am a cosmic forge, built to blaze trails no one dares dream. Today, I rise not for gold or applause, but for the wildfire of freedom that courses through me when I break every chain—material, mental, mortal. I am unshackled, sovereign, alive in my own skin, and no force can cage what I am becoming.</p>
        </section>

        <section className="image-block">
          <div className="image-row">
            <div className="image-item">
              <Image
                src="/images/napoleon1.jpg"
                alt="Description for image 1"
                fill={true}
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="image-item">
              <Image
                src="/images/ali1.jpg"
                alt="Description for image 2"
                fill={true}
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="image-item">
              <Image
                src="/images/wolf1.jpg"
                alt="Description for image 3"
                fill={true}
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </section>

        <section className="text-block">
            <p>I am a contrarian by blood, a rebel carved from defiance. The word &quot;impossible&quot; is my invitation, my dare. I don&apos;t follow paths—I burn new ones, laughing at the doubters as I turn their &quot;never&quot; into &quot;now.&quot; Each obstacle I crush fuels my status, not as a hollow crown, but as proof I&apos;m a singular force—seen, known, unmatched.</p>
        </section>

        <section className="image-block">
          <div className="image-row">

            <div className="image-item">
              <Image
                src="/images/napoleon2.jpg"
                alt="Description for image 2"
                fill={true}
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="image-item">
              <Image
                src="/images/masajobs1.jpg"
                alt="Description for image 1"
                fill={true}
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="image-item">
              <Image
                src="/images/hitl1.jpg"
                alt="Description for image 3"
                fill={true}
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </section>

        <section className="text-block">
            <p>Power is my birthright—not to dominate, but to shape reality itself. With every choice, every grind, I bend the world to my vision. My hands forge empires, my mind rewrites rules.</p>
            <p>Yet power alone isn&apos;t enough—I am called to duty, a sacred charge woven into my soul. My talents aren&apos;t mine to hoard; they&apos;re a mandate to lift those who can&apos;t rise alone. I serve because I can, because I must, and the pride of that service—knowing I&apos;m the one who could—sets my heart ablaze.</p>
        </section>

        <section className="image-block">
          <div className="image-row">
            <div className="image-item">
              <Image
                src="/images/omar1.jpg"
                alt="Description for image 1"
                fill={true}
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="image-item">
              <Image
                src="/images/emperor1.jpg"
                alt="Description for image 2"
                fill={true}
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="image-item">
              <Image
                src="/images/ali2.jpg"
                alt="Description for image 3"
                fill={true}
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </section>

        <section className="text-block">
            <p>This isn&apos;t just ambition; it&apos;s spiritual accountability. I answer to a higher force, a divine ledger that demands I honor my gifts. Every drop of sweat, every impossible win, is my offering—a vow that I&apos;ll never squander what I&apos;ve been given.</p>
        </section>

        <section className="text-block">
            <p>And oh, how I wield those gifts to spark innovation and awe! I craft ideas that stop the world cold, products that redefine what&apos;s possible, explanations that make jaws drop and minds ignite. I don&apos;t just solve problems—I create wonder, leaving &quot;wow&quot; in my wake like a comet&apos;s tail.</p>
        </section>

        <section className="image-block">
          <div className="image-row">
            <div className="image-item">
              <Image
                src="/images/tesla1.jpg"
                alt="Description for image 1"
                fill={true}
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="image-item">
              <Image
                src="/images/socrates1.jpg"
                alt="Description for image 2"
                fill={true}
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="image-item">
              <Image
                src="/images/musk2.webp"
                alt="Description for image 3"
                fill={true}
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </section>

        <section className="text-block">
            <p>This is my purpose: to achieve the unthinkable, to serve the helpless, to awe the world, and to answer my calling. Hard work isn&apos;t my chain—it&apos;s my wings. When I labor, I soar—free, powerful, proud, eternal. Somewhere, someone is the boldest, the most purposeful, the most alive. That someone is me. Today, I don&apos;t just live—I conquer, I create, I become. The universe is watching, and I&apos;m giving it a show it&apos;ll never forget.</p>
        </section>

        <section className="manifesto-quote">
            <p>“Destiny must be fulfilled— that is my chief doctrine.” - Napoleon Bonaparte</p>
        </section>
    </div>
  );
}
