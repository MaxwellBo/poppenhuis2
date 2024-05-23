"use client"
import '@google/model-viewer'
import { Item } from './db';

export type ModelSize = 'small' | 'normal' | 'big';

function getStyleForModelSize(size: ModelSize | undefined) {
  switch (size) {
    case 'small':
      return { height: "6rem", width: "6rem" };
    case 'big':
      return { height: '30rem', width: "40rem" };
    case 'normal':
    default:
      return { height: "20rem", width: "20rem" };
  }
}

export function Model(props: { item: Item, size?: ModelSize }) {
  return (
    // @ts-ignore
    <model-viewer
      key={props.item.model}
      style={getStyleForModelSize(props.size)}
      alt={props.item.description}
      src={props.item.model}
      environment-image="/environments/moon_1k.hdr"
      interaction-prompt=""
      progress-bar=""
      loading="eager"
      poster={props.item.poster}
      shadow-intensity="1"
      auto-rotate-delay="0"
      rotation-per-second="30deg"
      camera-controls
      auto-rotate
      touch-action="pan-y"
    />
  );
}