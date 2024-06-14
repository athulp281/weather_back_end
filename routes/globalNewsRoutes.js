const express = require("express");
const router = express.Router();
const globalNewsController = require("../controllers/globalNewsController");
const { verifyToken } = require("../middlewares/authMiddleware");
const upload = require("../middlewares/uploadMiddleware");

// Create a news
router.post(
    "/createGlobalNews",
    // verifyToken,
    upload.single("newsImage"),
    globalNewsController.createNews
);

// Get all news
router.get("/getAllGlobalNews", globalNewsController.getAllNews);

// Get news by ID
router.get("/:id", globalNewsController.getNewsById);

// Update news by ID
router.put(
    "/:id",
    verifyToken,
    upload.single("newsImage"),
    globalNewsController.updateNews
);

// Delete news by ID
router.delete("/:id", verifyToken, globalNewsController.deleteNews);

module.exports = router;
