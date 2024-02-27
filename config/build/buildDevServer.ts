import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import { BuildOptions } from './types/types'

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port,
    open: ['/right_hand/'],
    historyApiFallback: { index: '/right_hand/index.html' },
    hot: true,
    static: {
      directory: options.paths.public,
    },
    client: {
      overlay: false,
    },
  }
}
