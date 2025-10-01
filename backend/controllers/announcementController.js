import Announcement from "../models/Announcement.js";

export const postAnnouncement = async (req, res) => {
  const { title, body } = req.body;
  if (!title || !body) return res.status(400).json({ message: "Missing fields" });
  const announcement = await Announcement.create({ title, body, author: req.user._id });
  res.status(201).json(announcement);
};

export const getAnnouncements = async (req, res) => {
  const announcements = await Announcement.find().populate("author", "name").sort({ createdAt: -1 });
  res.json(announcements);
};
