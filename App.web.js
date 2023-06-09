import { WithSkiaWeb } from "@shopify/react-native-skia/lib/module/web";
import { version } from 'canvaskit-wasm/package.json';
export default function App() {
    return (
        <WithSkiaWeb
            opts={{ locateFile: (file) => `https://cdn.jsdelivr.net/npm/canvaskit-wasm@${version}/bin/full/${file}` }}
            getComponent={() => import("./src/MyComponent")}
        />
  );
}
