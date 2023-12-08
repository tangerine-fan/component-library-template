import { BeautifulTree } from '../BeautifulTree'
import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'

describe('BeautifulTree', () => {
    it('renders a boring circle', () => {
        const rendered = render(
            <BeautifulTree
                id="my-boring-test-tree"
                width={200}
                height={200}
            />
        )

        // NOTE: Snapshots are like black boxes, and depending too much on them for
        //       testing can make our tests brittle. Use them sparingly.
        //
        // The first time that we run this test, it will generate a snapshot that
        // will be used to compare against future runs. We trust that the first
        // execution is correct because we saw it in Storybook before.
        expect(rendered).toMatchSnapshot()
    })
})