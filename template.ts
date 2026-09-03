import * as path from 'node:path';
import type { TemplateConfig } from '../template-builder/types';

const TEMPLATE_DIR = __dirname;

export function getV2Config(): TemplateConfig {
  return {
    version: 'v2',
    cpuCount: 6,
    memoryMB: 8192,
    dockerfilePath: path.join(TEMPLATE_DIR, 'Dockerfile'),
    startCmd: '/usr/local/bin/start-cmd.sh',
    readyCmd: '',
  };
}

// Dedicated template for the V2 publish/OpenNext build. It shares the v2 image
// (same Dockerfile, so the /opt/anything-publisher tooling is byte-identical)
// but gets a bigger box than the shared v2 dev-server template. The publish
// build's yarn install fan-out + OpenNext build peaks well above the dev
// server; after #17935 lowered the shared v2 box to 6 CPU / 8192 MB, publishes
// started OOMing, so this restores the previous 8 CPU / 16384 MB for publishes
// only, leaving the dev-server box lean.
export function getV2PublishConfig(): TemplateConfig {
  return {
    ...getV2Config(),
    version: 'v2-publish',
    cpuCount: 8,
    memoryMB: 16384,
  };
}
