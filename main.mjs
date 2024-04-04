// Assuming you have a WebAssembly module at 'module.wasm'
const wasmModuleUrl = "./target/wasm-gc/release/build/lib/lib.wasm";

// An async function to load and instantiate the WebAssembly module
async function loadWasmModule(url) {
  try {
    // Fetch the WebAssembly module using the Fetch API
    const response = await fetch(url);
    const bytes = await response.arrayBuffer();

    // Instantiate the WebAssembly module
    const results = await WebAssembly.instantiate(bytes);

    // The WebAssembly module is now instantiated
    // `results.instance` contains the instantiated WebAssembly module
    // You can now call exported functions like so:
    const { fib } = results.instance.exports;
    for (let i = 0; i < 10; i++) {
      console.log(`fib(${i}) = ${fib(i)}`);
    }
    // const result = fib(12); // Call an exported function if needed
    // console.log(result); // Do something with the result
  } catch (err) {
    console.error("Error instantiating WebAssembly module:", err);
  }
}

// Call the function with the URL of the Wasm module
loadWasmModule(wasmModuleUrl);
