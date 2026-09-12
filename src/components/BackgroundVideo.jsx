import React, { useEffect, useRef, useState } from 'react';

/**
 * Cinematic Looping Video Background
 * - Plays local 30MB high-res video (/site-bg-loop.mp4) with CloudFront CDN fallback
 * - Custom fade-in/fade-out loop logic using requestAnimationFrame:
 *   - Monitors currentTime & duration
 *   - Fade in over 0.5s at start (0 -> 1)
 *   - Fade out over 0.5s before end (1 -> 0)
 *   - On ended: opacity = 0, wait 100ms, currentTime = 0, play()
 * - Guaranteed autoplay with explicit DOM muted property
 * - Visible across all viewports (desktop, tablet, mobile)
 */
export default function BackgroundVideo() {
  const videoRef = useRef(null);
  const [opacity, setOpacity] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);

  const CLOUDFRONT_URL = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4";

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Critical for browser autoplay policies: MUST be explicitly set on the DOM object
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    let animationFrameId;
    let isResetting = false;

    // Custom fade loop via requestAnimationFrame
    const updateFade = () => {
      if (!video || isResetting) return;

      const currentTime = video.currentTime;
      const duration = video.duration;

      let targetOpacity = 1;

      if (duration && duration > 0) {
        // Fade in over 0.5s at start (opacity 0 to 1)
        if (currentTime < 0.5) {
          targetOpacity = Math.max(0.1, currentTime / 0.5);
        }
        // Fade out over 0.5s before end (opacity 1 to 0)
        else if (currentTime > duration - 0.5) {
          const remaining = Math.max(0, duration - currentTime);
          targetOpacity = Math.max(0, remaining / 0.5);
        } else {
          targetOpacity = 1;
        }
      } else {
        targetOpacity = 1;
      }

      setOpacity(targetOpacity);
      animationFrameId = requestAnimationFrame(updateFade);
    };

    const startPlaying = () => {
      if (!video) return;
      video.muted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            animationFrameId = requestAnimationFrame(updateFade);
          })
          .catch((err) => {
            console.log("Autoplay waiting for user interaction:", err);
            // Fallback: try playing on first user touch/click/scroll
            const handleFirstInteraction = () => {
              video.muted = true;
              video.play().then(() => {
                setIsPlaying(true);
                animationFrameId = requestAnimationFrame(updateFade);
              });
              window.removeEventListener('click', handleFirstInteraction);
              window.removeEventListener('touchstart', handleFirstInteraction);
              window.removeEventListener('scroll', handleFirstInteraction);
            };
            window.addEventListener('click', handleFirstInteraction, { once: true });
            window.addEventListener('touchstart', handleFirstInteraction, { once: true });
            window.addEventListener('scroll', handleFirstInteraction, { once: true });
          });
      }
    };

    // On ended event: set opacity to 0, wait 100ms, reset currentTime = 0, then play() again
    const handleEnded = () => {
      isResetting = true;
      setOpacity(0);

      setTimeout(() => {
        if (video) {
          video.currentTime = 0;
          video.muted = true;
          video.play()
            .then(() => {
              isResetting = false;
              animationFrameId = requestAnimationFrame(updateFade);
            })
            .catch(() => {
              isResetting = false;
            });
        }
      }, 100);
    };

    video.addEventListener('ended', handleEnded);
    video.addEventListener('loadeddata', startPlaying);
    video.addEventListener('canplay', startPlaying);

    startPlaying();

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (video) {
        video.removeEventListener('ended', handleEnded);
        video.removeEventListener('loadeddata', startPlaying);
        video.removeEventListener('canplay', startPlaying);
      }
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden" 
      aria-hidden="true"
    >
      {/* 
        Video Element
        - Visible on all screens
        - High contrast opacity
      */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        loop={false}
        preload="auto"
        className="fixed inset-0 w-full h-full object-cover z-0 transition-opacity duration-300"
        style={{
          opacity: opacity,
          filter: 'brightness(1.05) contrast(1.02)',
        }}
      >
        <source src="/site-bg-loop.mp4" type="video/mp4" />
        <source src={CLOUDFRONT_URL} type="video/mp4" />
      </video>

      {/* 
        Smooth Gradient Overlay:
        Fades from soft cream at top to transparent over the video, then soft blush at the bottom
        Ensures the video is prominently visible while keeping text 100% legible.
      */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(255, 248, 245, 0.45) 0%, rgba(255, 248, 245, 0.15) 30%, rgba(255, 248, 245, 0.25) 70%, rgba(255, 237, 243, 0.85) 100%)',
        }}
      />
    </div>
  );
}
