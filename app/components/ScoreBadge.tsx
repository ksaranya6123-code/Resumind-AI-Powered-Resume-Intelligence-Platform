const ScoreBadge = ({ score }: { score: number }) => {
    const badge = score > 70
        ? {
            backgroundColor: "bg-badge-green",
            textColor: "text-green-600",
            label: "Strong",
        }
        : score > 49
            ? {
                backgroundColor: "bg-badge-yellow",
                textColor: "text-yellow-600",
                label: "Good start",
            }
            : {
                backgroundColor: "bg-badge-red",
                textColor: "text-red-600",
                label: "Needs work",
            };

    return (
        <div className={`${badge.backgroundColor} rounded-full px-3 py-1`}>
            <p className={`text-sm font-medium ${badge.textColor}`}>{badge.label}</p>
        </div>
    );
};

export default ScoreBadge;