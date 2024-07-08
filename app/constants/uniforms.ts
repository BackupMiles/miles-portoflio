import { Color, IUniform, Vector2 } from "three";

export type TWavesUniform = TUniforms & {
  u_big_waves_speed: IUniform<number>;
  u_big_waves_elevation: IUniform<number>;
  u_big_waves_frequency: IUniform<Vector2>;
  u_noise_amplifier: IUniform<number>;
  u_perlin_frequency: IUniform<number>;
  u_waves_multiplier: IUniform<number>;
  u_waves_elevation: IUniform<number>;
  // Color
  u_color_offset: IUniform<number>;
  u_color_multiplier: IUniform<number>;
  u_depth_color: IUniform<Color>;
  u_surface_color: IUniform<Color>;
};

type TWavesBuilderOptions = {
  depthColor: string;
  surfaceColor: string;
}

export const buildWavesUniform = ({ depthColor, surfaceColor }: TWavesBuilderOptions): TWavesUniform => ({
  ...DEFAULT_UNIFORMS,
  u_color_multiplier: { value: 5.0 },
  u_color_offset: { value: 0.25 },
  u_big_waves_elevation: { value: 0.2 },
  u_big_waves_frequency: { value: new Vector2(4, 1.5) },
  u_big_waves_speed: { value: 0.75 },
  u_depth_color: { value: new Color(depthColor) },
  u_noise_amplifier: { value: 0.2 },
  u_perlin_frequency: { value: 4.0 },
  u_surface_color: { value: new Color(surfaceColor) },
  u_waves_multiplier: { value: 3.0 },
  u_waves_elevation: { value: 0.15 },
});

export type TUniforms = {
  u_mouse: IUniform<Vector2>;
  u_mouse_enabled: IUniform<boolean>;
  u_resolution: IUniform<Vector2>;
  u_time: IUniform<number>;
}

export const DEFAULT_UNIFORMS: TUniforms = {
  u_resolution: { value: new Vector2() },
  u_time: { value: 1.0 },
  u_mouse: { value: new Vector2() },
  u_mouse_enabled: { value: false },
}