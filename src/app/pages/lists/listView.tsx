import React, { useState, useRef } from 'react';
import { HashLink } from 'react-router-hash-link';

import { Item, Segment, Input, Divider } from 'semantic-ui-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import localStyles from './style.less';

interface ViewProps {
    datasource: any;
    listItemView: any;
    categoryIcon?: any;
}

function debounce(callback, wait) {
    let timeout;

    return (...args) => {
        const context = this;

        clearTimeout(timeout);
        timeout = setTimeout(() => callback.apply(context, args), wait);
    };
}

function ListView(props: ViewProps) {
    const [ filter, setFilter ] = useState('');
    const searchRef = useRef(null);

    const onFilterChanged = debounce(() => {
        const inputRef = searchRef.current.inputRef.current;

        setFilter(inputRef.value);
    }, 400);

    function filterData(data) {
        const currentFilter = filter.trim();
        let filteredData;

        if (currentFilter.length >= 3) {
            filteredData = data.filter((item) => {
                const name = item.name.toLocaleLowerCase();
                const content = item.content.toLocaleLowerCase();
                const technologies = [ ...item.technologies ];

                return (
                    name.includes(currentFilter.toLocaleLowerCase()) ||
                    content.includes(currentFilter.toLocaleLowerCase()) ||
                    technologies.includes(currentFilter)
                );
            });
        }

        return filteredData || data;
    }

    function filterByTag(searchVal) {
        searchRef.current.inputRef.current.value = searchVal;
        onFilterChanged();
    }

    function renderCatHashLink() {
        const categories = Object.keys(props.datasource);

        if (categories.length < 2) { return null; }

        return categories.map(category => (
            <HashLink smooth to={`#${category}`} className={`ui positive button ${localStyles.categoryLink}`} key={category}>
                {category}
            </HashLink>
        ));
    }

    const renderItems = () => (
        Object.keys(props.datasource).map((category) => {
            const filteredData = filterData(props.datasource[category]);

            if (!filteredData.length) { return null; }

            return (
                <Segment id={category} className={localStyles.categorySegment} key={category}>
                    <h2 className="title is-spaced">
                        {props.categoryIcon && (
                            <>
                                <FontAwesomeIcon icon={props.categoryIcon} />
                                { ' ' }
                            </>
                        )}
                        {category}
                    </h2>
                    <Divider />

                    <Item.Group divided>
                        {filteredData.map(item => (
                            <props.listItemView data={item} filter={searchVal => filterByTag(searchVal)} key={`${category}.${item.name}.${encodeURIComponent(item.githubUrl)}`} />
                        ))}
                    </Item.Group>
                </Segment>
            );
        }));


    return (
        <>
            <Segment>
                <Input
                    fluid
                    onChange={onFilterChanged}
                    ref={searchRef}
                    placeholder="Ara"
                    icon="search"
                />

                {renderCatHashLink()}
            </Segment>

            {renderItems()}
        </>
    );
}

export {
    ListView as default,
};
