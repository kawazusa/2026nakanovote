import React from "react";

const FilterBar = ({
  electionTypes,
  districts,
  parties,
  selectedElectionType,
  selectedDistrict,
  selectedParty,
  onElectionTypeChange,
  onDistrictChange,
  onPartyChange,
  totalCount,
  filteredCount,
}) => {
  return (
    <div className="filter-bar" role="search" aria-label="候補者絞り込み">
      <div className="container">
        <div className="filter-bar__inner">
          <span className="filter-bar__label">絞り込み:</span>

          {electionTypes && electionTypes.length > 0 && (
            <select
              id="filter-election-type"
              className="filter-bar__select"
              value={selectedElectionType}
              onChange={(e) => onElectionTypeChange(e.target.value)}
              aria-label="選挙種類で絞り込み"
            >
              <option value="">全ての選挙</option>
              {electionTypes.map((et) => (
                <option key={et} value={et}>
                  {et}
                </option>
              ))}
            </select>
          )}

          {districts && districts.length > 0 && (
            <select
              id="filter-district"
              className="filter-bar__select"
              value={selectedDistrict}
              onChange={(e) => onDistrictChange(e.target.value)}
              aria-label="選挙区で絞り込み"
            >
              <option value="">全ての選挙区</option>
              {districts.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          )}

          {parties && parties.length > 0 && (
            <select
              id="filter-party"
              className="filter-bar__select"
              value={selectedParty}
              onChange={(e) => onPartyChange(e.target.value)}
              aria-label="政党で絞り込み"
            >
              <option value="">全ての政党</option>
              {parties.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          )}

          {(selectedElectionType || selectedDistrict || selectedParty) && (
            <button
              className="btn btn--outline"
              style={{ fontSize: "0.8rem", padding: "4px 12px" }}
              onClick={() => {
                onElectionTypeChange("");
                onDistrictChange("");
                onPartyChange("");
              }}
              aria-label="フィルターをリセット"
            >
              ✕ リセット
            </button>
          )}

          <span className="filter-bar__count" aria-live="polite">
            {filteredCount !== totalCount
              ? `${filteredCount} / ${totalCount} 名`
              : `${totalCount} 名`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
