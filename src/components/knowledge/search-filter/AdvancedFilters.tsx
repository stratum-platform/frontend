import { useState } from 'react';
import type { AdvancedFiltersProps } from './AdvancedFilters.types';

export const AdvancedFilters = ({
    filters,
    onFilterChange,
    onApply,
    onReset,
    isOpen,
    options,
}: AdvancedFiltersProps) => {
    const [selectedTags, setSelectedTags] = useState<string[]>(filters.tags || []);

    if (!isOpen) return null;

    const handleTagToggle = (tagValue: string) => {
        const newTags = selectedTags.includes(tagValue)
            ? selectedTags.filter(t => t !== tagValue)
            : [...selectedTags, tagValue];

        setSelectedTags(newTags);
        onFilterChange('tags', newTags);
    };

    const handleDateChange = (type: 'from' | 'to', value: string) => {
        onFilterChange(type === 'from' ? 'dateFrom' : 'dateTo', value);
    };

    return (
        <div id={'filters-panel'} className={`filters open`}>
            <select
                className="filter-select"
                value={filters.category}
                onChange={(e) => onFilterChange('category', e.target.value)}
            >
                {options.categories.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>

            <select
                className="filter-select"
                value={filters.sort}
                onChange={(e) => onFilterChange('sort', e.target.value)}
            >
                {options.sortOptions.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>

            <select
                className="filter-select"
                value={filters.status}
                onChange={(e) => onFilterChange('status', e.target.value)}
            >
                {options.statusOptions.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>

            <select
                className="filter-select"
                value={filters.author}
                onChange={(e) => onFilterChange('author', e.target.value)}
            >
                {options.authors.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>

            <div className="filter-date-range">
                <label>Период:</label>
                <div>
                    <input
                        type="date"
                        value={filters.dateFrom}
                        onChange={(e) => handleDateChange('from', e.target.value)}
                        placeholder="От"
                    />
                    <span style={{ color: '#6c757d' }}>—</span>
                    <input
                        type="date"
                        value={filters.dateTo}
                        onChange={(e) => handleDateChange('to', e.target.value)}
                        placeholder="До"
                    />
                </div>
            </div>

            <select
                className="filter-select"
                multiple
                size={4}
                value={selectedTags}
                onChange={(e) => {
                    const value = e.target.value;
                    handleTagToggle(value);
                }}
            >
                {options.tags.map(option => (
                    <option
                        key={option.value}
                        value={option.value}
                        style={{
                            background: selectedTags.includes(option.value) ? '#e3f2fd' : 'transparent',
                            padding: '0.3rem'
                        }}
                    >
                        {option.label}
                    </option>
                ))}
            </select>

            <select
                className="filter-select"
                value={filters.access}
                onChange={(e) => onFilterChange('access', e.target.value)}
            >
                {options.accessOptions.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>

            <div>
                <button
                    onClick={onApply}
                    className="btn btn-primary"
                >
                    Применить
                </button>
                <button
                    onClick={onReset}
                    className="btn btn-secondary"
                >
                    Сброс
                </button>
            </div>
        </div>
    );
};