function ExperienceCard({ data }) {
  function toTitleCase(str) {
    if (!str) {
      return ""; // Handle empty or null strings
    }
    return str
      .toLowerCase()
      .split(" ")
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <h3 className="text-xl text-white sm:text-2xl">
          {toTitleCase(data.role)}
        </h3>
        <p className="text-sm font-light text-[#C7C7C7] sm:text-base">
          {toTitleCase(data.duration)}
        </p>
      </div>
      {data.company.isAvailable && (
        <h4 className="text-sm font-light text-[#D3E97A] sm:text-base">
          {data.company.name}
        </h4>
      )}
      <p className="text-sm font-light text-[#C7C7C7] sm:text-base">
        {data.desc}
      </p>
    </div>
  );
}

export default ExperienceCard;
