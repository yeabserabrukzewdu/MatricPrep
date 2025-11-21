
import React, { createContext, useContext, ReactNode } from 'react';
import { useAudio } from '../hooks/useAudio';

type SoundName = 'click' | 'correct' | 'incorrect' | 'complete';

type AudioContextType = {
    playSound: (soundName: SoundName) => void;
    isLoading: boolean;
};

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const { playSound, isLoading } = useAudio();
    return <AudioContext.Provider value={{ playSound, isLoading }}>{children}</AudioContext.Provider>;
};

export const useAudioContext = () => {
    const context = useContext(AudioContext);
    if (!context) {
        throw new Error('useAudioContext must be used within an AudioProvider');
    }
    return context;
};
