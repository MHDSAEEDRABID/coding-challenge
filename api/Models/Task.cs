namespace coding_challenge.Models;

public record Task(
    int Id,
    string Title,
    string Description,
    bool IsCompleted,
    DateTime CreatedAt,
    DateTime? DueDate
);