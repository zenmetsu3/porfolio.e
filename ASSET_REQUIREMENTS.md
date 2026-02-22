# 🖼️ Asset Request Specification

To transition the portfolio from placeholder images to the final production assets, we require the following files from your design repository.

**Repository URL:** [Please Insert Repository URL Here]  
**Target Branch:** `main` (or specify if different)  
**Success Criteria:** 100% of the files below must be available and checksum validated.

---

## 1. Hero Section Assets
These assets are used in the top-most section of the landing page.

| Asset Name | Description | Current Placeholder | Required Format |
|------------|-------------|---------------------|-----------------|
| `hero-team.jpg` | Main visual for the hero section, featuring the team or a collaborative scene. | Unsplash ID: `1522071820081-009f0129c71c` | JPG/WebP, 800x800px min |

---

## 2. Team Member Headshots
Individual photos for each team member card. Ensure faces are centered for the hexagon crop.

| Asset Name | Team Member | Current Placeholder | Required Format |
|------------|-------------|---------------------|-----------------|
| `alex-rivers.jpg` | Alex Rivers (Lead Dev) | Unsplash ID: `1507003211169-0a1dd7228f2d` | JPG/WebP, 400x400px |
| `sarah-chen.jpg` | Sarah Chen (UI/UX) | Unsplash ID: `1494790108377-be9c29b29330` | JPG/WebP, 400x400px |
| `jordan-smith.jpg` | Jordan Smith (Frontend) | Unsplash ID: `1500648767791-00dcc994a43e` | JPG/WebP, 400x400px |
| `elena-rodriguez.jpg` | Elena Rodriguez (DevOps) | Unsplash ID: `1438761681033-6461ffad8d80` | JPG/WebP, 400x400px |
| `marcus-thorne.jpg` | Marcus Thorne (PM) | Unsplash ID: `1472099645785-5658abf4ff4e` | JPG/WebP, 400x400px |

---

## 3. Project Showcase Thumbnails
Images representing the latest work in the "Projects" section.

| Asset Name | Project Title | Current Placeholder | Required Format |
|------------|---------------|---------------------|-----------------|
| `project-ecommerce.jpg` | E-Commerce Platform | Unsplash ID: `1460925895917-afdab827c52f` | JPG/WebP, 800x600px |
| `project-ai-dashboard.jpg` | AI Dashboard | Unsplash ID: `1551288049-bebda4e38f71` | JPG/WebP, 800x600px |
| `project-banking.jpg` | Mobile Banking App | Unsplash ID: `1563986768609-322da13575f3` | JPG/WebP, 800x600px |
| `project-fitness.jpg` | Fitness Tracker | Unsplash ID: `1517836357463-d25dfeac3438` | JPG/WebP, 800x600px |
| `project-travel.jpg` | Travel Blog | Unsplash ID: `1476514525535-07fb3b4ae5f1` | JPG/WebP, 800x600px |
| `project-corporate.jpg` | Corporate Website | Unsplash ID: `1486406146926-c627a92ad1ab` | JPG/WebP, 800x600px |

---

## 📂 Implementation Instructions
Once the files are available:
1.  Place them in the `src/assets/images/` directory.
2.  Update `src/constants/portfolioData.js` to import these local files instead of the Unsplash URLs.
