#!/bin/bash
root_dir="./components"

for dir in $(find "${root_dir}" -mindepth 1 -type d); do
  index_file="${dir}/index.ts"
  
  # Start with a fresh index.ts file
  rm -f "${index_file}"
  touch "${index_file}"

  for tsx_file in $(find "${dir}" -maxdepth 1 -name '*.tsx'); do
    file_base=$(basename "${tsx_file}" .tsx)
    if [ "${file_base}" = "index" ]; then
      continue
    fi

    echo "import { ${file_base} } from \"./${file_base}\"" >> "${index_file}"
  done

  echo "" >> "${index_file}"
  echo "export {" >> "${index_file}"

  for tsx_file in $(find "${dir}" -maxdepth 1 -name '*.tsx'); do
    file_base=$(basename "${tsx_file}" .tsx)
    if [ "${file_base}" = "index" ]; then
      continue
    fi

    echo "  ${file_base}," >> "${index_file}"
  done

  echo "}" >> "${index_file}"
done
