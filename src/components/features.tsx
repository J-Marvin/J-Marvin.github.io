interface featuresProps {
    features: Array<string>
}

export default function Features({ features }: featuresProps) {
    return (
        <div>
            <h4 className="py-4 text-teal-600">
                Features
            </h4>
            {features.map((feature, index) => (
                <p key={index} className="text-gray-800 py-1">{feature}</p>
            ))}
        </div>
    )
}