
const SectionTitle = ({title,body}) => {
    return (
        <div className="space-y-2 mt-14 mb-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-center">{title}</h2>
            <p className="md:w-[45%] text-center mx-auto opacity-75">{body}</p>
        </div>
    );
};

export default SectionTitle;