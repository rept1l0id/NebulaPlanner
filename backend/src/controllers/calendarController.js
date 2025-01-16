const CalendarEvent = require('../models/calendarEventModel');

exports.getEvents = async (req, res) => {
    try {
        const events = await CalendarEvent.findAll({
            where: { userId: req.user.userId },
            order: [['startTime', 'ASC']],
        });
        res.json(events);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch events', error: error.message });
    }
};

exports.createEvent = async (req, res) => {
    try {
        const { title, description, startTime, endTime } = req.body;
        const event = await CalendarEvent.create({
            title,
            description,
            startTime,
            endTime,
            userId: req.user.userId,
        });
        res.status(201).json(event);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create event', error: error.message });
    }
};

// Обновление события
exports.updateEvent = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, startTime, endTime } = req.body;

        const event = await CalendarEvent.findOne({ where: { id, userId: req.user.userId } });

        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }

        event.title = title || event.title;
        event.description = description || event.description;
        event.startTime = startTime || event.startTime;
        event.endTime = endTime || event.endTime;

        await event.save();
        res.json(event);
    } catch (error) {
        res.status(500).json({ message: 'Failed to update event', error: error.message });
    }
};

// Удаление события
exports.deleteEvent = async (req, res) => {
    try {
        const { id } = req.params;

        const event = await CalendarEvent.findOne({ where: { id, userId: req.user.userId } });

        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }

        await event.destroy();
        res.json({ message: 'Event deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete event', error: error.message });
    }
};
