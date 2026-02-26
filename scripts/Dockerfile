FROM amazonlinux:2023
RUN dnf install -y nodejs24 && dnf clean all
WORKDIR /app
CMD ["sh", "-c", "set -e; npm install; node scripts/generateBundles.js"]
