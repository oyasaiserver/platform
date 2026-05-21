from flask import Flask, request, send_file, send_from_directory, jsonify
import os
import sys
import tempfile
import uuid

# Add the current directory to sys.path so we can import the processing logic
sys.path.append(os.path.dirname(__file__))
try:
    from minecraft_glass_layering import process_image
except ImportError:
    print("Error: Could not import process_image from minecraft_glass_layering.py")
    sys.exit(1)

app = Flask(__name__, static_folder='gui', static_url_path='/')

@app.route('/')
def index():
    return send_from_directory('gui', 'index.html')

@app.route('/api/generate_schem', methods=['POST'])
def generate_schem():
    if 'image' not in request.files:
        return jsonify({'error': 'No image file provided'}), 400
        
    file = request.files['image']
    if file.filename == '':
        return jsonify({'error': 'Empty filename'}), 400

    # Get configuration parameters
    max_size = int(request.form.get('maxSize', 256))
    layers = int(request.form.get('layers', 4))
    orientation = request.form.get('orientation', 'floor')
    
    # Check if keepSize is set
    keep_size = request.form.get('keepSize', 'false').lower() == 'true'
    if keep_size:
        # If keep_size is true, we pass a very large max_size to prevent downscaling in Python
        max_size = 8192

    try:
        # Create a temporary directory to store the input and output
        with tempfile.TemporaryDirectory() as temp_dir:
            input_path = os.path.join(temp_dir, 'input' + os.path.splitext(file.filename)[1])
            file.save(input_path)
            
            output_prefix = os.path.join(temp_dir, 'output')
            
            # Run the heavy Python logic
            print(f"Executing Python logic for {layers} layers, max_size={max_size}...")
            process_image(input_path, output_prefix, max_size=max_size, layers=layers, orientation=orientation)
            
            # The process_image function creates <output_prefix>_schem.schem
            schem_path = output_prefix + "_schem.schem"
            
            if not os.path.exists(schem_path):
                return jsonify({'error': 'Schematic file was not generated.'}), 500
                
            # Send the file back to the browser
            return send_file(schem_path, as_attachment=True, download_name=f"{os.path.splitext(file.filename)[0]}_miniled.schem")

    except Exception as e:
        import traceback
        traceback.print_exc()
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    print("="*50)
    print("Starting Antigravity Python Backend Server")
    print("Running at: http://localhost:5000")
    print("="*50)
    app.run(host='0.0.0.0', port=5000, debug=False)
