#!/bin/bash

# SEO Health Check Script for techwithsarthak.com
# This script checks if all SEO elements are properly configured

echo "🔍 SEO Health Check for techwithsarthak.com"
echo "=============================================="
echo ""

SITE_URL="https://techwithsarthak.com"

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if site is accessible
echo "1. Checking if site is accessible..."
if curl -s --head "$SITE_URL" | head -n 1 | grep "HTTP/[12].[01] [23].." > /dev/null; then
    echo -e "${GREEN}✓${NC} Site is accessible"
else
    echo -e "${RED}✗${NC} Site is not accessible"
fi
echo ""

# Check robots.txt
echo "2. Checking robots.txt..."
if curl -s "$SITE_URL/robots.txt" | grep -q "Sitemap:"; then
    echo -e "${GREEN}✓${NC} robots.txt exists and contains sitemap reference"
else
    echo -e "${RED}✗${NC} robots.txt missing or incomplete"
fi
echo ""

# Check sitemap.xml
echo "3. Checking sitemap.xml..."
if curl -s "$SITE_URL/sitemap.xml" | grep -q "<urlset"; then
    echo -e "${GREEN}✓${NC} sitemap.xml exists and is valid"
else
    echo -e "${RED}✗${NC} sitemap.xml missing or invalid"
fi
echo ""

# Check favicon
echo "4. Checking favicon..."
if curl -s --head "$SITE_URL/favicon/favicon.ico" | head -n 1 | grep "HTTP/[12].[01] [23].." > /dev/null; then
    echo -e "${GREEN}✓${NC} Favicon exists"
else
    echo -e "${RED}✗${NC} Favicon missing"
fi
echo ""

# Check meta tags
echo "5. Checking meta tags..."
PAGE_CONTENT=$(curl -s "$SITE_URL")

if echo "$PAGE_CONTENT" | grep -q "Sarthak Kesarwani"; then
    echo -e "${GREEN}✓${NC} Title contains your name"
else
    echo -e "${RED}✗${NC} Title missing or doesn't contain your name"
fi

if echo "$PAGE_CONTENT" | grep -q 'meta name="description"'; then
    echo -e "${GREEN}✓${NC} Meta description exists"
else
    echo -e "${RED}✗${NC} Meta description missing"
fi

if echo "$PAGE_CONTENT" | grep -q 'og:title'; then
    echo -e "${GREEN}✓${NC} Open Graph tags exist"
else
    echo -e "${RED}✗${NC} Open Graph tags missing"
fi

if echo "$PAGE_CONTENT" | grep -q 'twitter:card'; then
    echo -e "${GREEN}✓${NC} Twitter Card tags exist"
else
    echo -e "${RED}✗${NC} Twitter Card tags missing"
fi
echo ""

# Check structured data
echo "6. Checking structured data..."
if echo "$PAGE_CONTENT" | grep -q 'application/ld+json'; then
    echo -e "${GREEN}✓${NC} Structured data (JSON-LD) exists"
else
    echo -e "${RED}✗${NC} Structured data missing"
fi
echo ""

# Check mobile-friendly
echo "7. Checking mobile viewport..."
if echo "$PAGE_CONTENT" | grep -q 'viewport'; then
    echo -e "${GREEN}✓${NC} Mobile viewport meta tag exists"
else
    echo -e "${RED}✗${NC} Mobile viewport meta tag missing"
fi
echo ""

# Check canonical URL
echo "8. Checking canonical URL..."
if echo "$PAGE_CONTENT" | grep -q 'rel="canonical"'; then
    echo -e "${GREEN}✓${NC} Canonical URL is set"
else
    echo -e "${RED}✗${NC} Canonical URL missing"
fi
echo ""

echo "=============================================="
echo "✅ SEO Health Check Complete!"
echo ""
echo "📝 Next Steps:"
echo "1. Submit sitemap to Google Search Console"
echo "2. Update all social media profiles with portfolio link"
echo "3. Share your portfolio on LinkedIn"
echo "4. Create backlinks from GitHub, Medium, etc."
echo ""
echo "📚 See SEO_ACTION_CHECKLIST.md for detailed steps"
