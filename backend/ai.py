import json

def load_properties():
    with open("properties.json", "r") as f:
        return json.load(f)

def search_properties(max_price=None, bedrooms=None):

    properties = load_properties()

    results = []

    for prop in properties:

        if max_price and prop["price"] > max_price:
            continue

        if bedrooms and prop["bedrooms"] != bedrooms:
            continue

        results.append(prop)

    return results
if __name__ == "__main__":

    matches = search_properties(
        max_price=500000,
        bedrooms=4
    )

    print(matches)