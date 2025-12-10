import { useState, useCallback, useRef } from "react";
import { useSelector } from "react-redux";
import styles from "./FileInput.module.scss";
import IconSelector from "../IconSelector/IconSelector.jsx";

const FileInput = ({
  onFileSelect = () => {}, // Valor por defecto
  accept = "*/*",
  maxSize = 10,
  className = "",
  placeholder = "Arrastra un archivo aquí o haz clic para seleccionar",
  label = "",
}) => {
  const theme = useSelector((state) => state.themeSlice);
  const fileInputRef = useRef(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState(null);

  const validateFile = (file) => {
    setError(null);

    // Check file size
    if (file.size > maxSize * 1024 * 1024) {
      setError(`El archivo es muy grande. Máximo ${maxSize}MB`);
      return false;
    }

    return true;
  };

  const handleFile = useCallback(
    (file) => {
      if (!validateFile(file)) return;

      setSelectedFile(file);

      // Solo llamar onFileSelect si existe
      if (onFileSelect && typeof onFileSelect === "function") {
        onFileSelect(file);
      }

      // Generate preview for images
      const isImage =
        file.type.startsWith("image/") ||
        /\.(jpg|jpeg|png|gif|bmp|webp|svg)$/i.test(file.name);

      if (isImage) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setPreview(e.target?.result);
        };
        reader.onerror = (e) => {
          console.error("Error reading file:", e);
          setPreview(null);
        };
        reader.readAsDataURL(file);
      } else {
        setPreview(null);
      }
    },
    [onFileSelect, maxSize]
  );

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      setIsDragOver(false);

      const files = Array.from(e.dataTransfer.files);
      if (files.length > 0) {
        handleFile(files[0]);
      }
    },
    [handleFile]
  );

  const handleInputChange = useCallback(
    (e) => {
      const files = e.target.files;
      if (files && files.length > 0) {
        handleFile(files[0]);
      }
      // Limpiar el valor del input para permitir seleccionar el mismo archivo de nuevo
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    },
    [handleFile]
  );

  const openFileDialog = useCallback(() => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }, []);

  const clearFile = useCallback(() => {
    setSelectedFile(null);
    setPreview(null);
    setError(null);
    setIsHovered(false); // Resetear hover state

    // Solo llamar onFileSelect si existe
    if (onFileSelect && typeof onFileSelect === "function") {
      onFileSelect(null);
    }
  }, [onFileSelect]);

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return (
      Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
    );
  };

  return (
    <div className={`${styles.container} ${className}`}>
      {label && (
        <span className={styles.label} style={{ color: theme.textDark }}>
          {label}
        </span>
      )}
      {!selectedFile ? (
        <div
          className={`${styles.dropZone} ${isDragOver ? styles.dragOver : ""} ${
            error ? styles.error : ""
          }`}
          style={{
            borderColor: isDragOver
              ? theme.textDark
              : error
              ? theme.error
              : isHovered
              ? theme.primary + "80"
              : theme.textDark + "40",
            backgroundColor: isDragOver
              ? `${theme.primary}15`
              : isHovered
              ? `${theme.primary}10`
              : "transparent",
            color: theme.textDark,
          }}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={openFileDialog}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept={accept}
            onChange={handleInputChange}
            className={styles.hiddenInput}
          />

          <div className={styles.dropContent}>
            <div
              className={styles.uploadIcon}
              style={{
                color: isDragOver ? theme.primary : theme.primary + "CC",
              }}
            >
              <IconSelector name="upload" />
            </div>
            <p className={styles.placeholder} style={{ color: theme.textDark }}>
              {placeholder}
            </p>
          </div>
        </div>
      ) : (
        <div
          className={styles.filePreview}
          style={{
            borderColor: theme.primary + "40",
            backgroundColor: theme.bgLight,
          }}
        >
          <div className={styles.fileContent}>
            {preview ? (
              <div className={styles.imagePreview}>
                <img
                  src={preview}
                  alt="Preview"
                  className={styles.previewImage}
                  style={{ borderColor: theme.primary + "60" }}
                />
              </div>
            ) : (
              <div
                className={styles.fileIcon}
                style={{
                  backgroundColor: theme.primary + "15",
                  borderColor: theme.primary + "60",
                  color: theme.primary,
                }}
              >
                <IconSelector name="file" />
              </div>
            )}

            <div className={styles.fileInfo}>
              <p className={styles.fileName} style={{ color: theme.textDark }}>
                {selectedFile.name}
              </p>
              <p
                className={styles.fileSize}
                style={{ color: theme.textMiddle }}
              >
                {formatFileSize(selectedFile.size)}
              </p>
            </div>

            <button
              onClick={clearFile}
              className={styles.clearButton}
              style={{
                color: theme.textMiddle,
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = theme.error + "15";
                e.target.style.color = theme.error;
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = theme.textMiddle;
              }}
            >
              <IconSelector name="close" />
            </button>
          </div>
        </div>
      )}

      {error && (
        <p className={styles.errorText} style={{ color: theme.error }}>
          {error}
        </p>
      )}
    </div>
  );
};

export default FileInput;
