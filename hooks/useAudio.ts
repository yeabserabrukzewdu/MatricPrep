import { useCallback } from 'react';

// A helper function to create and play a sound with a given frequency, duration, and type
const playNote = (audioContext: AudioContext, frequency: number, startTime: number, duration: number, type: OscillatorType = 'sine', volume: number = 0.1) => {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, startTime);
    gainNode.gain.setValueAtTime(volume, startTime);
    gainNode.gain.exponentialRampToValueAtTime(0.00001, startTime + duration); // Fade out to avoid clicks

    oscillator.start(startTime);
    oscillator.stop(startTime + duration);
};

// A map of sound generation functions for different events
const sounds: Record<string, (ctx: AudioContext) => void> = {
    click: (ctx: AudioContext) => {
        playNote(ctx, 800, ctx.currentTime, 0.05, 'sine', 0.1);
    },
    correct: (ctx: AudioContext) => {
        const now = ctx.currentTime;
        playNote(ctx, 523.25, now, 0.1, 'sine', 0.15); // C5
        playNote(ctx, 783.99, now + 0.1, 0.15, 'sine', 0.15); // G5
    },
    incorrect: (ctx: AudioContext) => {
        const now = ctx.currentTime;
        playNote(ctx, 200, now, 0.2, 'sawtooth', 0.08);
        playNote(ctx, 190, now, 0.2, 'sawtooth', 0.08);
    },
    complete: (ctx: AudioContext) => {
        const now = ctx.currentTime;
        playNote(ctx, 523.25, now, 0.1, 'sine', 0.12); // C5
        playNote(ctx, 659.25, now + 0.1, 0.1, 'sine', 0.12); // E5
        playNote(ctx, 783.99, now + 0.2, 0.1, 'sine', 0.12); // G5
        playNote(ctx, 1046.50, now + 0.3, 0.15, 'sine', 0.15); // C6
    }
};

export const useAudio = () => {
    const playSound = useCallback((soundName: 'click' | 'correct' | 'incorrect' | 'complete') => {
        try {
            const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
            if (!audioContext) return;
            
            const play = sounds[soundName];
            if (play) {
                play(audioContext);
            }

            // Clean up the context after the sound has had time to play to avoid resource leaks
            setTimeout(() => audioContext.close(), 1000);

        } catch (e) {
            console.error("Could not play sound:", e);
        }
    }, []);

    const isLoading = false;

    return { playSound, isLoading };
};
