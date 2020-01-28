import React from 'react';
import { create } from "react-test-renderer";
import Task from './Task';

describe("Task component", () => {
    test("after creation <span> should be displayed", () => {
        const component = create(<Task text="test my to-do-list" />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span).not.toBeNull();
    });
    test("after creation <span> should contains correct status", () => {
        const component = create(<Task text="test my to-do-list" />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[0]).toBe("test my to-do-list");
    });
   
})