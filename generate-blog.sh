#!/bin/bash

# 1️⃣ Generate blog posts using AI (replace with your method)
echo "Generating 20 BOFU blog posts..."
# Placeholder: here you would call your AI script or API
# For example: python scripts/ai_generate_posts.py --count 20

# 2️⃣ Add generated posts to GitHub
git add content/blog/*
git commit -m "Add 20 automated BOFU blog posts"
git push origin main

# 3️⃣ Trigger Vercel deployment (forces production build)
vercel --prod --force
